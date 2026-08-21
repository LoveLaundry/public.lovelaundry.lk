import { useState, useRef, useEffect, useCallback } from "react";
import {
    RiChat1Line,
    RiCloseLine,
    RiSendPlaneFill,
    RiRobot2Line,
    RiUser3Line,
} from "react-icons/ri";
import { useLanguage } from "../i18n";

interface Message {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: Date;
}

const BOT_RESPONSES: Record<string, string[]> = {
    greeting: [
        "Hello! Welcome to Love Laundry. How can I help you today?",
        "Hey there! Need help with laundry? I'm here for you.",
        "Hi! Thanks for reaching out to Love Laundry. What can I do for you?",
    ],
    services: [
        "We offer 4 main services:\n\n1. Wash & Fold — Everyday laundry\n2. Ironing — Crisp, pressed clothes\n3. Dry Cleaning — Suits, dresses, delicates\n4. Pickup & Delivery — We collect and return to your door\n\nWould you like to know more about any of these?",
    ],
    pricing: [
        "Our general pricing:\n\n• Wash & Fold: From Rs. 200/kg\n• Ironing: From Rs. 50/piece\n• Dry Cleaning: From Rs. 300/piece\n\nFor an exact quote, call us or WhatsApp!",
    ],
    pickup: [
        "We offer free pickup and delivery! Here's how:\n\n1. Call or WhatsApp us to schedule\n2. We collect your laundry\n3. We wash, fold/iron, and deliver back fresh!\n\nTypical turnaround: 24–48 hours.",
    ],
    locations: [
        "Our main centre is in Chilaw. We also have collection points in Madampe, Mahawewa, Kottaramulla, Dunakadeniya, Bibiladeniya, and Wennappuwa.\n\nScroll down on our website to see all locations on the map!",
    ],
    hours: [
        "We're available 24/7 for WhatsApp bookings!\n\nPickup & delivery hours:\n• Mon–Sat: 8 AM – 7 PM\n• Sunday: 9 AM – 5 PM",
    ],
    contact: [
        "Reach us at:\n\n📞 Phone: +94 70 000 0000\n💬 WhatsApp: +94 70 000 0000\n📧 Email: info@lovelaundry.lk",
    ],
    commercial: [
        "Yes! We serve hotels, restaurants, spas, and businesses. Our commercial services include Hotel Linen, Commercial Laundry, and Bulk Processing.\n\nWe partner with 9 hotels including Goldi Sands, Amagi, and Camelot. Contact us for a custom quote!",
    ],
    careers: [
        "We're hiring! Current openings:\n\n• Delivery Driver\n• Machine Operator\n• Ironer / Presser\n• Collection Agent\n\nBenefits include competitive pay, training, and flexible schedules. Send us a WhatsApp message to apply!",
    ],
    quality: [
        "We treat every garment with professional care! Professional-grade equipment, separate handling for delicates, quality inspection before delivery, and a 4.9/5 customer rating.",
    ],
};

const FALLBACK = [
    "I'm not sure I understand that. Could you rephrase?\n\nI can help with services, pricing, pickup/delivery, locations, hours, commercial services, or job openings.",
];

function classifyIntent(text: string): string {
    const lower = text.toLowerCase();
    if (/\b(hi|hello|hey|good\s*(morning|evening)|sup|howdy)\b/.test(lower)) return "greeting";
    if (/\b(service|offer|provide|wash|fold|iron|dry\s*clean)\b/.test(lower)) return "services";
    if (/\b(how\s*much|price|cost|rate|charge|fee|tariff)\b/.test(lower)) return "pricing";
    if (/\b(pick\s*up|deliver|collect|drop\s*off|schedule|book|turnaround)\b/.test(lower)) return "pickup";
    if (/\b(where|location|address|branch|chilaw|madampe|mahawewa|find\s*you)\b/.test(lower)) return "locations";
    if (/\b(hour|open|close|time|schedule|when)\b/.test(lower)) return "hours";
    if (/\b(contact|phone|whatsapp|call|email|number|reach)\b/.test(lower)) return "contact";
    if (/\b(hotel|business|commercial|bulk|restaurant|spa|gym|corporate)\b/.test(lower)) return "commercial";
    if (/\b(job|hiring|work|career|team|employ|vacancy|apply)\b/.test(lower)) return "careers";
    if (/\b(quality|care|safe|damage|delicate|stain|silk)\b/.test(lower)) return "quality";
    return "fallback";
}

function getBotResponse(userMessage: string): string {
    const intent = classifyIntent(userMessage);
    const responses = BOT_RESPONSES[intent] || FALLBACK;
    return responses[Math.floor(Math.random() * responses.length)];
}

const ChatWidget = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        if (isOpen && !hasGreeted) {
            const welcome: Message = {
                id: crypto.randomUUID(),
                text: t("chatWelcome"),
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages([welcome]);
            setHasGreeted(true);
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen, hasGreeted, t]);

    const sendMessage = useCallback(() => {
        const text = input.trim();
        if (!text) return;

        const userMsg: Message = {
            id: crypto.randomUUID(),
            text,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        const delay = 600 + Math.random() * 800;
        setTimeout(() => {
            const botResponse = getBotResponse(text);
            const botMsg: Message = {
                id: crypto.randomUUID(),
                text: botResponse,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, delay);
    }, [input]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? t("chatClose") : t("chatOpen")}
                className="
                    fixed
                    bottom-6
                    right-6
                    z-[9999]
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E01E31]
                    text-white
                    shadow-[0_8px_28px_rgba(224,30,49,0.4)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#C11324]
                    hover:shadow-[0_12px_36px_rgba(224,30,49,0.5)]
                    sm:bottom-8
                    sm:right-8
                    sm:h-16
                    sm:w-16
                    md:bottom-10
                    md:right-10
                    md:h-[68px]
                    md:w-[68px]
                "
            >
                {isOpen ? (
                    <RiCloseLine className="h-6 w-6 sm:h-7 sm:w-7" />
                ) : (
                    <RiChat1Line className="h-6 w-6 sm:h-7 sm:w-7" />
                )}

                {/* Notification dot */}
                {!isOpen && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                    </span>
                )}
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <div
                    className="
                        fixed
                        bottom-24
                        right-4
                        z-[9998]
                        flex
                        w-[calc(100%-32px)]
                        max-w-[400px]
                        flex-col
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#E5E5E5]
                        bg-white
                        shadow-[0_24px_64px_rgba(0,0,0,0.15)]
                        sm:bottom-28
                        sm:right-6
                        md:bottom-32
                        md:right-10
                    "
                    style={{ height: "min(520px, calc(100vh - 160px))" }}
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 bg-[#E01E31] px-5 py-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                            <RiRobot2Line className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-bold text-white">
                                {t("chatTitle")}
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                {t("chatOnline")}
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white"
                        >
                            <RiCloseLine className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                {msg.sender === "bot" && (
                                    <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FEF2F2] text-[#E01E31]">
                                        <RiRobot2Line className="h-3.5 w-3.5" />
                                    </div>
                                )}

                                <div
                                    className={`
                                        max-w-[80%]
                                        whitespace-pre-line
                                        rounded-2xl
                                        px-4
                                        py-3
                                        text-[13px]
                                        leading-relaxed
                                        ${msg.sender === "user"
                                            ? "rounded-br-md bg-[#E01E31] text-white"
                                            : "rounded-bl-md bg-[#F5F5F5] text-[#000000]"
                                        }
                                    `}
                                >
                                    {msg.text}
                                </div>

                                {msg.sender === "user" && (
                                    <div className="ml-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E01E31] text-white">
                                        <RiUser3Line className="h-3.5 w-3.5" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FEF2F2] text-[#E01E31]">
                                    <RiRobot2Line className="h-3.5 w-3.5" />
                                </div>
                                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-[#F5F5F5] px-4 py-3">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#737373]" style={{ animationDelay: "0ms" }} />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#737373]" style={{ animationDelay: "150ms" }} />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#737373]" style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    <div className="flex gap-2 overflow-x-auto border-t border-[#E5E5E5] px-4 py-2.5">
                        {[
                            { value: "Services", label: t("chatQuickServices") },
                            { value: "Pricing", label: t("chatQuickPricing") },
                            { value: "Locations", label: t("chatQuickLocations") },
                            { value: "Hours", label: t("chatQuickHours") },
                        ].map(({ value, label }) => (
                            <button
                                key={value}
                                type="button"
                                onClick={() => {
                                    setInput(label);
                                    setTimeout(() => {
                                        const userMsg: Message = {
                                            id: crypto.randomUUID(),
                                            text: label,
                                            sender: "user",
                                            timestamp: new Date(),
                                        };
                                        setMessages((prev) => [...prev, userMsg]);
                                        setInput("");
                                        setIsTyping(true);
                                        setTimeout(() => {
                                            const botMsg: Message = {
                                                id: crypto.randomUUID(),
                                                text: getBotResponse(value),
                                                sender: "bot",
                                                timestamp: new Date(),
                                            };
                                            setMessages((prev) => [...prev, botMsg]);
                                            setIsTyping(false);
                                        }, 600 + Math.random() * 800);
                                    }, 50);
                                }}
                                className="
                                    shrink-0
                                    rounded-full
                                    border
                                    border-[#E5E5E5]
                                    bg-white
                                    px-3
                                    py-1.5
                                    text-[11px]
                                    font-semibold
                                    text-[#404040]
                                    transition-all
                                    duration-200
                                    hover:border-[#E01E31]/30
                                    hover:bg-[#FEF2F2]
                                    hover:text-[#E01E31]
                                "
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-2 border-t border-[#E5E5E5] px-4 py-3">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={t("chatPlaceholder")}
                            className="
                                flex-1
                                rounded-full
                                border
                                border-[#E5E5E5]
                                bg-white
                                px-4
                                py-2.5
                                text-[13px]
                                text-[#000000]
                                placeholder-[#A3A3A3]
                                outline-none
                                transition-colors
                                duration-200
                                focus:border-[#E01E31]/40
                                focus:bg-white
                            "
                        />

                        <button
                            type="button"
                            onClick={sendMessage}
                            disabled={!input.trim()}
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#E01E31]
                                text-white
                                shadow-[0_4px_12px_rgba(224,30,49,0.25)]
                                transition-all
                                duration-200
                                hover:bg-[#C11324]
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <RiSendPlaneFill className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#E5E5E5] px-4 py-2 text-center text-[10px] text-[#A3A3A3]">
                        {t("chatPowered")}
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
