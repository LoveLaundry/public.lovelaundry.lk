const API_URL: string =
    (import.meta.env.VITE_CHAT_API_URL as string | undefined) ?? "";

interface ChatApiResult {
    reply: string;
}

/**
 * Send a user message to the Love Laundry chat backend.
 *
 * Base URL resolution:
 *   - If VITE_CHAT_API_URL is set (production), call `<base>/api/chat`.
 *   - Otherwise assume the backend is co-located (e.g. a Vercel function)
 *     and call `/api/chat`.
 */
export async function fetchBotReply(
    message: string,
    lang: "en" | "sin"
): Promise<string> {
    const base = API_URL.replace(/\/$/, "");
    const url = base ? `${base}/api/chat` : "/api/chat";

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, lang }),
    });

    if (!res.ok) {
        throw new Error(`Chat API error: ${res.status}`);
    }

    const data = (await res.json()) as ChatApiResult;
    if (!data.reply) {
        throw new Error("Empty reply from chat API");
    }
    return data.reply;
}
