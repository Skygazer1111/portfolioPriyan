import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

const ACCENT = { r: 255, g: 122, b: 26 };
const LINK_DISTANCE = 140;
const LINK_DISTANCE_SQ = LINK_DISTANCE * LINK_DISTANCE;
const CELL_SIZE = LINK_DISTANCE;
const MOBILE_BREAKPOINT = 768;

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationId = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let isVisible = true;
    let isPageVisible = document.visibilityState === "visible";

    const initParticles = () => {
      const count = Math.min(Math.max(Math.floor((width * height) / 5000), 140), 260);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        size: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.35 + 0.22,
      }));
      cols = Math.max(1, Math.ceil(width / CELL_SIZE));
      rows = Math.max(1, Math.ceil(height / CELL_SIZE));
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const drawLinks = () => {
      const grid: number[][] = Array.from({ length: cols * rows }, () => []);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.min(Math.floor(p.x / CELL_SIZE), cols - 1);
        const cy = Math.min(Math.floor(p.y / CELL_SIZE), rows - 1);
        grid[cy * cols + cx].push(i);
      }

      ctx.lineWidth = 0.5;

      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const cell = grid[cy * cols + cx];
          if (cell.length === 0) continue;

          for (let ny = cy; ny <= Math.min(cy + 1, rows - 1); ny++) {
            for (let nx = cx; nx <= Math.min(cx + 1, cols - 1); nx++) {
              const neighborCell = grid[ny * cols + nx];
              for (const i of cell) {
                for (const j of neighborCell) {
                  if (j <= i) continue;
                  const a = particles[i];
                  const b = particles[j];
                  const dx = a.x - b.x;
                  const dy = a.y - b.y;
                  const distSq = dx * dx + dy * dy;
                  if (distSq < LINK_DISTANCE_SQ) {
                    const dist = Math.sqrt(distSq);
                    const alpha = (1 - dist / LINK_DISTANCE) * 0.18;
                    ctx.strokeStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${alpha})`;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }
      }
    };

    const draw = () => {
      if (!isVisible || !isPageVisible) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x <= 0 || p.x >= width) p.vx *= -1;
          if (p.y <= 0 || p.y >= height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));
        }
      }

      drawLinks();

      ctx.fillStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, 1)`;
      for (const p of particles) {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(draw);
    };

    const onVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? true;
      },
      { rootMargin: "120px 0px" },
    );
    visibilityObserver.observe(container);

    document.addEventListener("visibilitychange", onVisibilityChange);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={containerRef} className="particle-bg" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
