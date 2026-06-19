const ALLOWED_PREVIEW_HOSTS = new Set(["querycraft.xyz", "www.querycraft.xyz"]);

export async function proxyLandingPage(requestUrl: string): Promise<Response> {
  const request = new URL(requestUrl);
  const targetParam = request.searchParams.get("url");

  if (!targetParam) {
    return new Response("Missing url parameter", { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(targetParam);
  } catch {
    return new Response("Invalid url parameter", { status: 400 });
  }

  if (target.protocol !== "https:") {
    return new Response("Only https URLs are allowed", { status: 400 });
  }

  if (!ALLOWED_PREVIEW_HOSTS.has(target.hostname)) {
    return new Response("Host not allowed for preview proxy", { status: 403 });
  }

  if (target.pathname !== "/" && target.pathname !== "") {
    return new Response("Only landing page paths are allowed", { status: 400 });
  }

  const upstream = await fetch(`${target.origin}/`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; PortfolioPreview/1.0)",
      Accept: "text/html,application/xhtml+xml",
    },
    redirect: "follow",
  });

  if (!upstream.ok) {
    return new Response("Failed to fetch landing page", { status: 502 });
  }

  const html = await upstream.text();
  const previewHtml = html.replace(
    /<head([^>]*)>/i,
    `<head$1><base href="${target.origin}/"><meta name="referrer" content="no-referrer"><style>html,body{overflow:hidden!important;overscroll-behavior:none!important;}</style>`,
  );

  return new Response(previewHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
