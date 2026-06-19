import { createFileRoute } from "@tanstack/react-router";

import { proxyLandingPage } from "../../lib/site-preview.server";

export const Route = createFileRoute("/api/preview")({
  server: {
    handlers: {
      GET: async ({ request }) => proxyLandingPage(request.url),
    },
  },
});
