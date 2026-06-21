const SNAKE_PATH = `
  M 6 0
  L 6 28
  L 42 28
  L 42 56
  L 78 56
  L 78 22
  L 94 22
  L 94 72
  L 54 72
  L 54 98
  L 18 98
  L 18 74
  L 6 74
  L 6 118
  L 36 118
  L 36 146
  L 72 146
  L 72 172
  L 92 172
  L 92 128
  L 62 128
  L 62 102
  L 24 102
  L 24 156
  L 50 156
  L 50 188
  L 84 188
  L 84 214
  L 14 214
  L 14 242
  L 44 242
  L 44 268
  L 76 268
  L 76 294
  L 96 294
  L 96 300
`;

const LOOP_SECONDS = 32;
const SPAWN_EVERY_SECONDS = 4;
const SNAKE_COUNT = LOOP_SECONDS / SPAWN_EVERY_SECONDS;

export function MechanicalSnake() {
  return (
    <div className="mechanical-snake" aria-hidden="true">
      <svg viewBox="0 0 100 300" preserveAspectRatio="none">
        <path d={SNAKE_PATH} className="mechanical-snake__track" vectorEffect="non-scaling-stroke" />

        {Array.from({ length: SNAKE_COUNT }, (_, i) => (
          <g key={i} className="mechanical-snake__unit">
            <rect x="-3.5" y="-1.2" width="5" height="2.4" className="mechanical-snake__segment" />
            <rect x="-7.5" y="-1" width="3.5" height="2" className="mechanical-snake__segment mechanical-snake__segment--tail" />
            <rect x="-1.2" y="-2.4" width="1.2" height="1.2" className="mechanical-snake__head" />
            <animateMotion
              dur={`${LOOP_SECONDS}s`}
              begin={`${i * SPAWN_EVERY_SECONDS}s`}
              repeatCount="indefinite"
              path={SNAKE_PATH}
              rotate="auto"
              calcMode="linear"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
