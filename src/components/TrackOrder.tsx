import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RiCloseLine, RiArchiveLine, RiSearchLine } from "react-icons/ri"
import { fetchOrderTracking, type OrderTracking } from "../lib/orderApi"

const STAGE_LABELS: Record<string, string> = {
  draft: "Draft",
  received: "Received",
  washing: "Washing",
  pressing: "Pressing",
  folding: "Folding",
  packing: "Packing",
  ready: "Ready",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
}

function label(status: string): string {
  return STAGE_LABELS[status] ?? status
}

function fmt(ts?: string): string {
  if (!ts) return ""
  const d = new Date(ts)
  if (isNaN(d.getTime())) return ts
  return d.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  })
}

interface TrackOrderProps {
  open: boolean
  onClose: () => void
}

export default function TrackOrder({ open, onClose }: TrackOrderProps) {
  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tracking, setTracking] = useState<OrderTracking | null>(null)

  useEffect(() => {
    if (!open) {
      setTracking(null)
      setError(null)
      setOrderId("")
    }
  }, [open])

  const track = async () => {
    if (!orderId.trim()) return
    setLoading(true)
    setError(null)
    setTracking(null)
    try {
      const result = await fetchOrderTracking(orderId.trim())
      setTracking(result)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-[#E5E5E5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F2F2F2]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FEF2F2] text-[#E01E31]">
                  <RiArchiveLine className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#111827]">
                  Track your order
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"
                aria-label="Close"
              >
                <RiCloseLine className="h-4 w-4 text-[#737373]" />
              </button>
            </div>

            <div className="px-5 py-4 space-y-3">
              <p className="text-[12px] text-[#737373]">
                Enter your order ID to see its current status and progress.
              </p>
              <div className="flex gap-2">
                <input
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && track()}
                  placeholder="Order ID (e.g. 64f2... or 123)"
                  className="flex-1 rounded-lg border border-[#E5E5E5] px-3 py-2.5 text-[13px] text-[#111827] placeholder-[#A3A3A3] focus:border-[#E01E31] focus:ring-2 focus:ring-[#E01E31]/10 outline-none"
                />
                <button
                  onClick={track}
                  disabled={loading || !orderId.trim()}
                  className="flex items-center gap-1.5 rounded-lg bg-[#E01E31] px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(224,30,49,0.18)] hover:bg-[#C11324] disabled:opacity-50 transition-colors cursor-pointer"
                >
                  {loading ? (
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <RiSearchLine className="h-4 w-4" />
                  )}
                  Track
                </button>
              </div>

              {error && (
                <p className="text-[12px] text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              {tracking && (
                <div className="rounded-xl border border-[#F2F2F2] p-4 space-y-3">
                  <div>
                    <p className="text-[11px] uppercase font-semibold tracking-wide text-[#98A2B3]">
                      {tracking.quotation_title ? "Order" : "Status"}
                    </p>
                    <p className="text-[14px] font-semibold text-[#111827]">
                      {tracking.quotation_title || label(tracking.status)}
                    </p>
                  </div>

                  <div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-semibold ${
                        tracking.status === "delivered"
                          ? "bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]"
                          : tracking.status === "cancelled"
                            ? "bg-[#FEF3F2] text-[#B42318] border border-[#FECDCA]"
                            : "bg-[#EFF4FF] text-[#3538CD] border border-[#C7D7FE]"
                      }`}
                    >
                      {label(tracking.status)}
                    </span>
                  </div>

                  <ol className="relative border-l border-[#E5E7EB] ml-1 space-y-3 pl-4">
                    {tracking.status_history
                      .slice()
                      .reverse()
                      .map((h, i) => (
                        <li key={i} className="relative">
                          <span className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-[#E01E31] border-2 border-white" />
                          <p className="text-[13px] font-medium text-[#111827]">
                            {label(h.status)}
                          </p>
                          <p className="text-[11px] text-[#98A2B3]">
                            {fmt(h.changed_at)}
                            {h.note ? ` · ${h.note}` : ""}
                          </p>
                        </li>
                      ))}
                  </ol>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
