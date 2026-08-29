/**
 * Customer order-tracking client.
 *
 * Points at the quotation-service (same backend that serves the chat). Configure
 * `VITE_ORDERS_API_URL` if you keep orders on a separate base; otherwise it
 * falls back to `VITE_CHAT_API_URL`.
 *
 * The tracking endpoint is public and returns only non-PII fields
 * (title, status, status_history timeline).
 */
const BASE: string =
  (import.meta.env.VITE_ORDERS_API_URL as string | undefined) ??
  (import.meta.env.VITE_CHAT_API_URL as string | undefined) ??
  ""

export interface TrackingHistoryEntry {
  status: string
  changed_at: string
  changed_by?: string | null
  note?: string | null
}

export interface OrderTracking {
  id: string | number
  quotation_title?: string | null
  tag?: string
  status: string
  status_history: TrackingHistoryEntry[]
  created_at?: string
  updated_at?: string
}

function baseUrl(): string {
  return BASE.replace(/\/$/, "")
}

export async function fetchOrderTracking(
  orderId: string,
): Promise<OrderTracking> {
  const url = `${baseUrl()}/quotations/${encodeURIComponent(orderId)}/tracking`
  const res = await fetch(url)
  if (!res.ok) {
    if (res.status === 404) throw new Error("We couldn't find an order with that ID.")
    throw new Error(`Tracking unavailable (${res.status})`)
  }
  return (await res.json()) as OrderTracking
}
