import {
    RiCalendarCheckLine,
    RiTruckLine,
    RiSparklingLine,
    RiHomeSmileLine,
    RiShoppingBasket2Line,
    RiStarFill,
    RiTimeLine,
    RiShieldCheckLine,
    RiHeart3Fill,
    RiHotelLine,
    RiBuildingLine,
    RiScales3Line,
} from "react-icons/ri";
import type { IconType } from "react-icons";

// Company Information
export const companyInfo = {
    name: "Love Laundry",
    tagline: "Fresh. Clean. Delivered with love.",
    description: "Professional Laundry Service",
    phone: "+94700000000",
    whatsapp: "+94700000000",
    email: "info@lovelaundry.lk",
    address: "Colombo, Sri Lanka",
    rating: "4.9",
    serviceCount: "10+",
    availability: "24/7",
    customerCount: "200+",
};

// Hero Section Data
export const heroData = {
    badge: {
        icon: RiHeart3Fill,
        text: "Professional Laundry Service",
    },
    title: {
        main: "Fresh clothes.",
        highlight: "More free time.",
    },
    description:
        "Professional laundry care, ironing and dry cleaning with convenient pickup and delivery. We take care of your clothes, so you can take care of what matters.",
    buttons: {
        primary: {
            text: "Book a Pickup",
            scrollTo: "contact",
        },
        secondary: {
            text: "Explore Services",
            scrollTo: "services",
        },
    },
    stats: [
        {
            icon: RiShoppingBasket2Line,
            value: companyInfo.serviceCount,
            label: "Services",
        },
        {
            icon: RiStarFill,
            value: companyInfo.rating,
            label: "Customer rating",
        },
        {
            icon: RiTimeLine,
            value: companyInfo.availability,
            label: "Convenience",
        },
    ],
    image: {
        src: "./assets/images/love-laundry-hero.png",
        alt: "Love Laundry pickup and laundry service",
    },
    badge_text: {
        primary: "Love Laundry",
        secondary: "Schedule yours today",
    },
};

// Services Section Data
export interface Service {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export const services: Service[] = [
    {
        title: "Wash & Fold",
        subtitle: "Everyday Laundry",
        description:
            "Professional washing, drying and folding for your everyday clothes.",
        image: "./assets/images/services/wash-fold.jpg",
    },
    {
        title: "Ironing",
        subtitle: "Crisp & Perfect",
        description:
            "Freshly pressed clothes that look clean, sharp and ready to wear.",
        image: "./assets/images/services/ironing.jpg",
    },
    {
        title: "Dry Cleaning",
        subtitle: "Special Care",
        description:
            "Specialized cleaning for suits, dresses and delicate garments.",
        image: "./assets/images/services/dry-cleaning.jpg",
    },
    {
        title: "Pickup & Delivery",
        subtitle: "At Your Door",
        description:
            "We collect your laundry and return it fresh and ready to wear.",
        image: "./assets/images/services/pickup-delivery.jpg",
    },
];

export const servicesSection = {
    badge: "Our Services",
    title: {
        main: "Everything your",
        highlight: "clothes need.",
    },
    description:
        "From everyday washing to delicate dry cleaning, our professional team keeps your wardrobe fresh, clean and ready.",
    cta: {
        text: "Not sure which service you need?",
        subtext: "Talk to our team and we'll help you choose.",
        buttonText: "Contact Us",
    },
};

// Commercial/Hotel Services Section Data
export interface CommercialService {
    icon: IconType;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
}

export const commercialServices: CommercialService[] = [
    {
        icon: RiHotelLine,
        title: "Hotel Linen Service",
        subtitle: "Luxury Standards",
        description:
            "Professional bulk linen washing for hotels, guest houses, and resorts. We maintain the highest hygiene standards.",
        features: [
            "Bed sheets & pillowcases",
            "Towels & bathrobes",
            "Table linens",
            "Curtains & duvets",
        ],
    },
    {
        icon: RiBuildingLine,
        title: "Commercial Laundry",
        subtitle: "Business Solutions",
        description:
            "Reliable laundry services for restaurants, spas, salons, gyms, and medical facilities with flexible scheduling.",
        features: [
            "Restaurant linens",
            "Spa & salon towels",
            "Gym towels & uniforms",
            "Medical facility linens",
        ],
    },
    {
        icon: RiScales3Line,
        title: "Bulk Processing",
        subtitle: "High Volume Care",
        description:
            "Large-scale laundry processing with quick turnaround times. Perfect for businesses with regular high-volume needs.",
        features: [
            "Daily/weekly pickup",
            "Fast turnaround time",
            "Dedicated account manager",
            "Competitive bulk pricing",
        ],
    },
];

export const commercialSection = {
    badge: "Commercial Services",
    title: {
        main: "Professional linen care for",
        highlight: "hotels & businesses.",
    },
    description:
        "We provide specialized commercial laundry services for hotels, restaurants, spas, and businesses across Sri Lanka. From bulk linen processing to specialty cleaning, we handle all your commercial laundry needs with professional care and reliable service.",
    cta: {
        text: "Need commercial laundry solutions?",
        subtext: "Get a custom quote for your business needs.",
        buttonText: "Request Quote",
    },
};

// Process/How It Works Section Data
export interface ProcessStep {
    number: string;
    title: string;
    text: string;
    icon: IconType;
}

export const processSteps: ProcessStep[] = [
    {
        number: "01",
        title: "Book a pickup",
        text: "Contact us and tell us what you need cleaned.",
        icon: RiCalendarCheckLine,
    },
    {
        number: "02",
        title: "We collect",
        text: "Our delivery team picks up your laundry from your location.",
        icon: RiTruckLine,
    },
    {
        number: "03",
        title: "We clean",
        text: "Your clothes are washed, dried, ironed or dry cleaned as required.",
        icon: RiSparklingLine,
    },
    {
        number: "04",
        title: "We deliver",
        text: "Fresh, clean and neatly prepared clothes come back to your doorstep.",
        icon: RiHomeSmileLine,
    },
];

export const processSection = {
    badge: "How It Works",
    title: {
        main: "Laundry day,",
        highlight: "without the laundry.",
    },
    description:
        "Getting professionally cleaned clothes has never been easier. We handle the entire process from pickup to delivery.",
    info: {
        title: "Simple. Professional. Convenient.",
        subtitle: "We take care of your clothes.",
    },
};

// Why Love Laundry Section Data
export interface Feature {
    icon: IconType;
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        icon: RiTruckLine,
        title: "Doorstep Service",
        description:
            "We collect and deliver your laundry right to your doorstep.",
    },
    {
        icon: RiSparklingLine,
        title: "Professional Care",
        description:
            "Your clothes are handled with professional equipment and care.",
    },
    {
        icon: RiTimeLine,
        title: "Save Your Time",
        description:
            "Spend your time on what matters while we take care of your laundry.",
    },
    {
        icon: RiShieldCheckLine,
        title: "Trusted Service",
        description:
            "We treat every garment with the attention and care it deserves.",
    },
];

export const benefits: string[] = [
    "Professional cleaning",
    "Careful garment handling",
    "Convenient pickup & delivery",
    "Reliable customer service",
];

export const whyLoveLaundrySection = {
    badge: "Why Love Laundry",
    title: {
        main: "More than clean.",
        highlight: "It's care.",
    },
    description:
        "We combine professional laundry care with modern convenience, making it easier for busy families, professionals and businesses to keep everything fresh.",
    card: {
        title: "We care about every garment.",
        description:
            "Love Laundry is built around one simple idea: professional laundry should be convenient, reliable and genuinely cared for.",
        info: {
            title: "Freshness you can trust",
            subtitle: "Every order receives professional care.",
        },
    },
};

// Contact Section Data
export const contactSection = {
    badge: {
        icon: RiSparklingLine,
        text: "Ready when you are",
    },
    title: "Give your laundry day back to yourself.",
    description:
        "Book your next pickup and let Love Laundry handle the rest. Fresh clothes, professional care and convenient delivery.",
    features: [
        "Professional care",
        "Doorstep pickup",
        "Easy delivery",
    ],
    buttons: {
        phone: {
            text: "Call Us",
            href: `tel:${companyInfo.phone}`,
        },
        whatsapp: {
            text: "WhatsApp Us",
            href: `https://wa.me/${companyInfo.whatsapp.replace(/\+/g, "")}`,
        },
    },
};

// Navigation Data
export const navigationItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "commercial", label: "Commercial" },
    { id: "process", label: "How It Works" },
    { id: "about", label: "Why Us" },
    { id: "contact", label: "Contact" },
];
