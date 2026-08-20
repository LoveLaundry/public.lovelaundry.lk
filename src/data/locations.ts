// Location data for Love Laundry map
// Update coordinates with exact values when available

export interface Location {
    id: string;
    name: string;
    type: "laundry" | "shop";
    lat: number;
    lng: number;
    address: string;
    phone?: string;
    hours?: string;
}

export const mainLaundry: Location = {
    id: "main",
    name: "Love Laundry - Main Centre",
    type: "laundry",
    // TODO: Replace with exact coordinates
    lat: 7.9731,
    lng: 79.8242,
    address: "Chilaw, Sri Lanka",
    phone: "+94700000000",
    hours: "Mon - Sat: 8:00 AM - 6:00 PM",
};

export const shopLocations: Location[] = [
    {
        id: "shop-madampe",
        name: "Love Laundry - Madampe",
        type: "shop",
        // TODO: Replace with exact shop coordinates
        lat: 7.948,
        lng: 79.817,
        address: "Madampe, Sri Lanka",
    },
    {
        id: "shop-mahawewa",
        name: "Love Laundry - Mahawewa",
        type: "shop",
        lat: 7.953,
        lng: 79.798,
        address: "Mahawewa, Sri Lanka",
    },
    {
        id: "shop-kottaramulla",
        name: "Love Laundry - Kottaramulla",
        type: "shop",
        lat: 7.932,
        lng: 79.835,
        address: "Kottaramulla, Sri Lanka",
    },
    {
        id: "shop-dunakadeniya",
        name: "Love Laundry - Dunakadeniya",
        type: "shop",
        lat: 7.962,
        lng: 79.848,
        address: "Dunakadeniya, Sri Lanka",
    },
    {
        id: "shop-bibiladeniya",
        name: "Love Laundry - Bibiladeniya",
        type: "shop",
        lat: 7.944,
        lng: 79.842,
        address: "Bibiladeniya, Sri Lanka",
    },
    {
        id: "shop-wennappuwa",
        name: "Love Laundry - Wennappuwa",
        type: "shop",
        lat: 7.972,
        lng: 79.882,
        address: "Wennappuwa, Sri Lanka",
    },
];

export const allLocations: Location[] = [mainLaundry, ...shopLocations];
