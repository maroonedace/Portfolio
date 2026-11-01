import { handleContact } from "./handlers/contact";
import { handleMeeting } from "./handlers/meeting";

const routes = new Map<
  string,
  (request: Request, env: Env) => Promise<Response>
>([
  ["/api/contact", handleContact],
  ["/api/meeting", handleMeeting],
]);

export default {
  async fetch(request, env) {
    const handler = routes.get(new URL(request.url).pathname);
    if (!handler) {
      return new Response("Not found", { status: 404 });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "POST" },
      });
    }
    return handler(request, env);
  },
} satisfies ExportedHandler<Env>;
