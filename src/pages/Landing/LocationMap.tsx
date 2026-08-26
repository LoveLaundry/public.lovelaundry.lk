import { useEffect, useState, useCallback } from "react";
import {
    RiMapPin2Line,
    RiNavigationLine,
    RiLoader4Line,
    RiMapPinLine,
    RiShoppingBag3Line,
    RiSearchLine,
    RiCloseLine,
    RiArrowRightLine,
    RiMapPinAddLine,
    RiStore2Line,
    RiAppsLine,
} from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { useLanguage } from "../../i18n";
import {
    allLocations,
    mainLaundry,
    shopLocations,
    type Location,
} from "../../data/locations";

const MapContent = () => {
    const { t } = useLanguage();
    const [map, setMap] = useState<L.Map | null>(null);
    const [L, setL] = useState<typeof import("leaflet") | null>(null);
    const [nearest, setNearest] = useState<Location | null>(null);
    const [routeLine, setRouteLine] = useState<L.Polyline | null>(null);
    const [loadingGeo, setLoadingGeo] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(
        null
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<"all" | "main" | "shops">(
        "all"
    );

    const filteredLocations = allLocations.filter((loc) => {
        const matchesSearch =
            searchQuery.trim() === "" ||
            loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            loc.address.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
            activeFilter === "all" ||
            (activeFilter === "main" && loc.id === mainLaundry.id) ||
            (activeFilter === "shops" && loc.id !== mainLaundry.id);
        return matchesSearch && matchesFilter;
    });

    const mainCentreLabel = t("mapMainCentre");
    const collectionPointLabel = t("mapCollectionPoint");
    const yourLocationLabel = t("mapYourLocation");

    // Initialize map
    useEffect(() => {
        let cancelled = false;

        const init = async () => {
            const leaflet = await import("leaflet");
            if (cancelled) return;
            setL(leaflet);

            const mapInstance = leaflet
                .map("love-laundry-map", {
                    center: [7.955, 79.835],
                    zoom: 12,
                    zoomControl: false,
                    scrollWheelZoom: true,
                })
                .setView([7.955, 79.835], 12);

            leaflet
                .tileLayer(
                    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                    {
                        attribution:
                            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
                        maxZoom: 19,
                    }
                )
                .addTo(mapInstance);

            // Add zoom control to bottom-right
            leaflet.control.zoom({ position: "bottomright" }).addTo(mapInstance);

            // Custom marker icons
            const mainIcon = leaflet.divIcon({
                className: "custom-marker",
                html: `<div class="marker-main">
                    <div class="marker-pin-main">
                        <img src="./assets/icon.png" alt="Love Laundry" class="marker-icon-img" />
                    </div>
                    <div class="marker-pulse"></div>
                </div>`,
                iconSize: [52, 68],
                iconAnchor: [26, 68],
                popupAnchor: [0, -72],
            });

            const shopIcon = leaflet.divIcon({
                className: "custom-marker",
                html: `<div class="marker-shop">
                    <div class="marker-pin-shop">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 01-8 0"/>
                        </svg>
                    </div>
                </div>`,
                iconSize: [32, 40],
                iconAnchor: [16, 40],
                popupAnchor: [0, -42],
            });

            // Add main laundry marker
            const mainMarker = leaflet
                .marker([mainLaundry.lat, mainLaundry.lng], { icon: mainIcon })
                .addTo(mapInstance);

            const mainPopup = `
                <div class="popup-content">
                    <div class="popup-badge popup-badge-main">${mainCentreLabel}</div>
                    <h3 class="popup-title">${mainLaundry.name}</h3>
                    <p class="popup-address">${mainLaundry.address}</p>
                    ${mainLaundry.phone ? `<a href="tel:${mainLaundry.phone}" class="popup-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> ${mainLaundry.phone}</a>` : ""}
                    ${mainLaundry.hours ? `<div class="popup-hours"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${mainLaundry.hours}</div>` : ""}
                </div>
            `;
            mainMarker.bindPopup(mainPopup, {
                maxWidth: 280,
                className: "custom-popup",
            });

            // Add shop markers
            shopLocations.forEach((shop) => {
                const marker = leaflet
                    .marker([shop.lat, shop.lng], { icon: shopIcon })
                    .addTo(mapInstance);

                const popup = `
                    <div class="popup-content">
                        <div class="popup-badge popup-badge-shop">${collectionPointLabel}</div>
                        <h3 class="popup-title">${shop.name}</h3>
                        <p class="popup-address">${shop.address}</p>
                    </div>
                `;
                marker.bindPopup(popup, {
                    maxWidth: 280,
                    className: "custom-popup",
                });

                marker.on("click", () => {
                    setSelectedLocation(shop);
                });
            });

            mainMarker.on("click", () => {
                setSelectedLocation(mainLaundry);
            });

            setMap(mapInstance);
        };

        init();

        return () => {
            cancelled = true;
            if (map) {
                map.remove();
            }
        };
    }, []);

    // Find nearest location
    const findNearest = useCallback(() => {
        if (!map || !L) return;

        setLoadingGeo(true);

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            setLoadingGeo(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLatLng = L.latLng(
                    position.coords.latitude,
                    position.coords.longitude
                );

                // Find nearest location
                let minDist = Infinity;
                let nearestLoc: Location = mainLaundry;

                allLocations.forEach((loc) => {
                    const dist = userLatLng.distanceTo(
                        L.latLng(loc.lat, loc.lng)
                    );
                    if (dist < minDist) {
                        minDist = dist;
                        nearestLoc = loc;
                    }
                });

                setNearest(nearestLoc);
                setSelectedLocation(nearestLoc);

                // Remove old route
                if (routeLine) {
                    map.removeLayer(routeLine);
                }

                // Draw user marker
                const userIcon = L.divIcon({
                    className: "custom-marker",
                    html: `<div class="marker-user">
                        <div class="marker-user-dot"></div>
                        <div class="marker-user-ring"></div>
                    </div>`,
                    iconSize: [24, 24],
                    iconAnchor: [12, 12],
                });

                L.marker(userLatLng, { icon: userIcon })
                    .addTo(map)
                    .bindPopup(
                        `<div class="popup-content"><div class="popup-badge popup-badge-user">${yourLocationLabel}</div></div>`,
                        { className: "custom-popup" }
                    )
                    .openPopup();

                // Fetch route from OSRM
                const url = `https://router.project-osrm.org/route/v1/driving/${userLatLng.lng},${userLatLng.lat};${nearestLoc.lng},${nearestLoc.lat}?overview=full&geometries=geojson`;

                fetch(url)
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.routes && data.routes.length > 0) {
                            const coords = data.routes[0].geometry.coordinates.map(
                                (c: number[]) => [c[1], c[0]] as L.LatLngExpression
                            );

                            const polyline = L.polyline(coords, {
                                color: "#E01E31",
                                weight: 4,
                                opacity: 0.85,
                                dashArray: "10, 12",
                                lineCap: "round",
                                lineJoin: "round",
                            }).addTo(map);

                            setRouteLine(polyline);

                            // Fit map to show route
                            const bounds = L.latLngBounds([
                                userLatLng,
                                L.latLng(nearestLoc.lat, nearestLoc.lng),
                            ]);
                            map.fitBounds(bounds, { padding: [60, 60] });
                        }
                    })
                    .catch(() => {
                        // Route failed, just show markers
                        map.setView(userLatLng, 13);
                    })
                    .finally(() => {
                        setLoadingGeo(false);
                    });
            },
            () => {
                alert(
                    "Unable to retrieve your location. Please allow location access."
                );
                setLoadingGeo(false);
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    }, [map, L, routeLine, yourLocationLabel]);

    // Center on a location
    const centerOn = useCallback(
        (loc: Location) => {
            if (!map) return;
            map.flyTo([loc.lat, loc.lng], 14, { duration: 1.2 });
            setSelectedLocation(loc);
        },
        [map]
    );

    const openDirections = (loc: Location) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            {/* Location List Sidebar */}
            <div className="flex flex-col gap-3 lg:w-[340px] lg:shrink-0">
                {/* Find Nearest Button */}
                <button
                    type="button"
                    onClick={findNearest}
                    disabled={loadingGeo}
                    className="
                        flex
                        h-12
                        items-center
                        justify-center
                        gap-2.5
                        rounded-xl
                        bg-[#E01E31]
                        px-5
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_8px_24px_rgba(224,30,49,0.35)]
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-[#C11324]
                        hover:shadow-[0_12px_32px_rgba(224,30,49,0.45)]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                >
                    {loadingGeo ? (
                        <RiLoader4Line className="h-5 w-5 animate-spin" />
                    ) : (
                        <RiNavigationLine className="h-5 w-5" />
                    )}
                    {loadingGeo ? t("mapFinding") : t("mapFindNearest")}
                </button>

                {/* Nearest Result - Gradient Card */}
                {nearest && (
                    <div className="nearest-result-card group relative overflow-hidden rounded-xl border border-[#E01E31]/20 p-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E01E31] via-[#c91a2b] to-[#9e1521] opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.12]" />
                        <div className="relative flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E01E31] text-white shadow-md shadow-[#E01E31]/30">
                                <RiNavigationLine className="h-4 w-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-[#E01E31]">
                                    {t("mapNearestLocation")}
                                </div>
                                <div className="mt-0.5 truncate font-display text-sm font-semibold text-[#000000]">
                                    {nearest.name}
                                </div>
                                <div className="mt-0.5 truncate text-xs text-[#737373]">
                                    {nearest.address}
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => openDirections(nearest)}
                            className="
                                relative
                                mt-3
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-1.5
                                rounded-lg
                                border
                                border-[#E01E31]/20
                                bg-white/80
                                py-2
                                text-xs
                                font-semibold
                                text-[#E01E31]
                                backdrop-blur-sm
                                transition-all
                                duration-200
                                hover:border-[#E01E31]/40
                                hover:bg-[#FEF2F2]
                            "
                        >
                            <RiArrowRightLine className="h-3.5 w-3.5" />
                            {t("mapGetDirections")}
                        </button>
                    </div>
                )}

                {/* Search Bar */}
                <div className="relative">
                    <RiSearchLine className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A3A3A3]" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t("mapSearchPlaceholder")}
                        className="
                            w-full
                            rounded-xl
                            border
                            border-[#E5E5E5]
                            bg-white
                            py-2.5
                            pl-10
                            pr-10
                            text-sm
                            text-[#000000]
                            placeholder-[#A3A3A3]
                            outline-none
                            transition-all
                            duration-200
                            focus:border-[#E01E31]/40
                            focus:bg-white
                            focus:shadow-[0_0_0_3px_rgba(224,30,49,0.08)]
                        "
                    />
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                rounded-full
                                p-0.5
                                text-[#A3A3A3]
                                transition-colors
                                hover:bg-[#E5E5E5]
                                hover:text-[#404040]
                            "
                        >
                            <RiCloseLine className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-1 rounded-xl bg-[#F5F5F5] p-1">
                    {(
                        [
                            { key: "all", label: t("mapFilterAll"), icon: RiAppsLine },
                            { key: "main", label: t("mapFilterMain"), icon: RiMapPin2Line },
                            { key: "shops", label: t("mapFilterShops"), icon: RiStore2Line },
                        ] as const
                    ).map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            onClick={() => setActiveFilter(tab.key)}
                            className={`
                                flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2
                                text-xs font-semibold transition-all duration-200
                                ${
                                    activeFilter === tab.key
                                        ? "bg-white text-[#E01E31] shadow-sm"
                                        : "text-[#737373] hover:text-[#000000]"
                                }
                            `}
                        >
                            <tab.icon className="h-3.5 w-3.5" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Location Count */}
                <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-medium text-[#737373]">
                        {filteredLocations.length === allLocations.length
                            ? `${allLocations.length} ${t("mapLocations")}`
                            : `${filteredLocations.length} of ${allLocations.length} ${t("mapLocations")}`}
                    </span>
                    {(searchQuery || activeFilter !== "all") && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearchQuery("");
                                setActiveFilter("all");
                            }}
                            className="text-xs font-semibold text-[#E01E31] transition-colors hover:text-[#C11324]"
                        >
                            {t("mapClearFilters")}
                        </button>
                    )}
                </div>

                {/* Location List */}
                <div className="location-list flex flex-col gap-1.5 overflow-y-auto lg:max-h-[340px]">
                    {filteredLocations.length === 0 ? (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F5F5]">
                                <RiMapPinAddLine className="h-7 w-7 text-[#A3A3A3]" />
                            </div>
                            <div className="mt-3 text-sm font-semibold text-[#000000]">
                                {t("mapNoResults")}
                            </div>
                            <div className="mt-1 text-xs text-[#737373]">
                                {t("mapTryAdjust")}
                            </div>
                        </div>
                    ) : (
                        filteredLocations.map((loc) => {
                            const isMain = loc.id === mainLaundry.id;
                            const isSelected = selectedLocation?.id === loc.id;

                            return (
                                <div key={loc.id} className="relative">
                                    <button
                                        type="button"
                                        onClick={() => centerOn(loc)}
                                        className={`
                                            flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200
                                            ${
                                                isSelected
                                                    ? "border-[#E01E31]/50 bg-[#FEF2F2] shadow-sm"
                                                    : "border-[#E5E5E5] bg-white hover:border-[#E01E31]/30 hover:bg-white"
                                            }
                                        `}
                                    >
                                        {isSelected && (
                                            <div className="absolute left-1.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#E01E31] shadow-[0_0_4px_rgba(224,30,49,0.5)]" />
                                        )}
                                        <div
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                                                isMain
                                                    ? "bg-[#E01E31] text-white"
                                                    : "bg-[#E01E31]/10 text-[#E01E31]"
                                            }`}
                                        >
                                            {isMain ? (
                                                <RiMapPin2Line className="h-5 w-5" />
                                            ) : (
                                                <RiShoppingBag3Line className="h-5 w-5" />
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="truncate text-sm font-semibold text-[#000000]">
                                                {loc.name}
                                            </div>
                                            <div className="truncate text-xs text-[#737373]">
                                                {isMain ? t("mapMainCentre") : loc.address}
                                            </div>
                                        </div>
                                        {isSelected && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openDirections(loc);
                                                }}
                                                className="
                                                    shrink-0
                                                    rounded-lg
                                                    border
                                                    border-[#E01E31]/20
                                                    bg-white
                                                    p-2
                                                    text-[#E01E31]
                                                    transition-all
                                                    duration-200
                                                    hover:border-[#E01E31]/40
                                                    hover:bg-[#FEF2F2]
                                                "
                                                title={t("mapGetDirections")}
                                            >
                                                <RiArrowRightLine className="h-4 w-4" />
                                            </button>
                                        )}
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
};

const LocationMap = () => {
    const { t } = useLanguage();
    const sectionRef = useReveal<HTMLDivElement>({ y: 20 });

    return (
        <section
            id="locations"
            className="
                relative
                overflow-hidden
                bg-[#0C0708]
                px-4
                py-12
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
            "
        >
            {/* Warm brand glow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(70%_60%_at_0%_0%,rgba(224,30,49,0.16),transparent_60%)]
                "
            />
            <div ref={sectionRef} className="relative mx-auto w-full max-w-[1440px]">
                {/* Section Header */}
                <div data-reveal className="mb-10 sm:mb-14">
                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.22em]
                            text-[#E01E31]
                            sm:text-xs
                        "
                    >
                        <RiMapPinLine className="h-4 w-4" />
                        {t("mapBadge")}
                    </span>
                    <h2
                        className="
                            font-display
                            mt-3
                            text-3xl
                            font-semibold
                            leading-[1.1]
                            tracking-[-0.02em]
                            text-white
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        {t("mapTitle")}
                        <span className="text-[#E01E31]"> {t("mapTitleHighlight")}</span>
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                        {t("mapDescription")}
                    </p>
                </div>

                {/* Map + Sidebar */}
                <div
                    data-reveal
                    className="
                        flex
                        flex-col
                        gap-5
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        bg-white
                        p-2
                        shadow-[0_16px_48px_rgba(0,0,0,0.3)]
                        sm:p-3
                        lg:flex-row
                    "
                >
                    {/* Sidebar */}
                    <MapContent />

                    {/* Map Container */}
                    <div className="relative min-h-[400px] flex-1 lg:min-h-[520px]">
                        <div id="love-laundry-map" className="h-full w-full" />

                        {/* Map overlay gradient (top) */}
                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                left-0
                                right-0
                                top-0
                                z-[400]
                                h-8
                                bg-gradient-to-b
                                from-white
                                to-transparent
                            "
                        />
                    </div>
                </div>

                {/* Map Styles */}
                <style>{`
                    /* Leaflet overrides */
                    .love-laundry-map,
                    #love-laundry-map {
                        font-family: inherit;
                    }

                    .leaflet-container {
                        border-radius: 0 24px 24px 0;
                        background: #FFFFFF;
                    }

                    @media (max-width: 1023px) {
                        .leaflet-container {
                            border-radius: 0 0 24px 24px;
                        }
                    }

                    .leaflet-control-zoom {
                        border: none !important;
                        box-shadow: 0 4px 16px rgba(0,0,0,0.1) !important;
                        border-radius: 12px !important;
                        overflow: hidden;
                    }

                    .leaflet-control-zoom a {
                        width: 36px !important;
                        height: 36px !important;
                        line-height: 36px !important;
                        font-size: 18px !important;
                        color: #000000 !important;
                        border-bottom: 1px solid #E5E5E5 !important;
                    }

                    .leaflet-control-zoom a:last-child {
                        border-bottom: none !important;
                    }

                    .leaflet-control-zoom a:hover {
                        background: #FEF2F2 !important;
                        color: #E01E31 !important;
                    }

                    .leaflet-control-attribution {
                        background: rgba(255,255,255,0.85) !important;
                        backdrop-filter: blur(4px);
                        font-size: 10px !important;
                        padding: 2px 8px !important;
                        border-radius: 8px 0 0 0 !important;
                    }

                    .leaflet-control-attribution a {
                        color: #737373 !important;
                    }

                    /* Custom Main Marker */
                    .marker-main {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .marker-pin-main {
                        width: 48px;
                        height: 48px;
                        background: #E01E31;
                        border-radius: 50% 50% 50% 0;
                        transform: rotate(-45deg);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 16px rgba(224,30,49,0.45);
                        border: 3px solid white;
                    }

                    .marker-icon-img {
                        transform: rotate(45deg);
                        width: 26px;
                        height: 26px;
                        object-fit: contain;
                        border-radius: 4px;
                    }

                    .marker-pulse {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        background: rgba(224,30,49,0.2);
                        animation: pulse 2s ease-out infinite;
                    }

                    @keyframes pulse {
                        0% { transform: translateX(-50%) scale(1); opacity: 0.6; }
                        100% { transform: translateX(-50%) scale(2.5); opacity: 0; }
                    }

                    /* Custom Shop Marker */
                    .marker-shop {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .marker-pin-shop {
                        width: 28px;
                        height: 28px;
                        background: #E01E31;
                        border-radius: 50% 50% 50% 0;
                        transform: rotate(-45deg);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 3px 12px rgba(224,30,49,0.35);
                        border: 2px solid white;
                    }

                    .marker-pin-shop svg {
                        transform: rotate(45deg);
                    }

                    /* User Location Marker */
                    .marker-user {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .marker-user-dot {
                        width: 16px;
                        height: 16px;
                        background: #3B82F6;
                        border-radius: 50%;
                        border: 3px solid white;
                        box-shadow: 0 2px 8px rgba(59,130,246,0.5);
                        z-index: 2;
                    }

                    .marker-user-ring {
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        background: rgba(59,130,246,0.15);
                        border-radius: 50%;
                        animation: userPulse 2s ease-out infinite;
                    }

                    @keyframes userPulse {
                        0% { transform: scale(0.8); opacity: 0.8; }
                        100% { transform: scale(2); opacity: 0; }
                    }

                    /* Custom Popup */
                    .custom-popup .leaflet-popup-content-wrapper {
                        border-radius: 16px !important;
                        box-shadow: 0 12px 36px rgba(0,0,0,0.15) !important;
                        border: 1px solid #E5E5E5;
                        padding: 0;
                    }

                    .custom-popup .leaflet-popup-content {
                        margin: 0 !important;
                        padding: 0 !important;
                    }

                    .custom-popup .leaflet-popup-tip {
                        border-top-color: white !important;
                        box-shadow: none !important;
                    }

                    .popup-content {
                        padding: 16px 18px;
                    }

                    .popup-badge {
                        display: inline-block;
                        font-size: 10px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        padding: 3px 8px;
                        border-radius: 6px;
                        margin-bottom: 8px;
                    }

                    .popup-badge-main {
                        background: #E01E31;
                        color: white;
                    }

                    .popup-badge-shop {
                        background: #FEF2F2;
                        color: #E01E31;
                    }

                    .popup-badge-user {
                        background: #EFF6FF;
                        color: #3B82F6;
                    }

                    .popup-title {
                        font-family: 'Fraunces', serif;
                        font-weight: 700;
                        font-size: 15px;
                        color: #000000;
                        margin: 0 0 4px;
                        line-height: 1.3;
                    }

                    .popup-address {
                        font-size: 12px;
                        color: #737373;
                        margin: 0 0 8px;
                        line-height: 1.4;
                    }

                    .popup-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        font-size: 12px;
                        font-weight: 600;
                        color: #E01E31;
                        text-decoration: none;
                        margin-bottom: 4px;
                    }

                    .popup-link:hover {
                        text-decoration: underline;
                    }

                    .popup-hours {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        font-size: 11px;
                        color: #404040;
                        margin-top: 4px;
                    }

                    /* Scrollbar for location list */
                    .location-list::-webkit-scrollbar {
                        width: 4px;
                    }

                    .location-list::-webkit-scrollbar-track {
                        background: transparent;
                    }

                    .location-list::-webkit-scrollbar-thumb {
                        background: #E5E5E5;
                        border-radius: 4px;
                    }

                    /* Nearest result card */
                    .nearest-result-card {
                        background: linear-gradient(135deg, #FFFFFF 0%, #FEF2F2 100%);
                        transition: all 0.3s ease;
                    }

                    .nearest-result-card:hover {
                        box-shadow: 0 4px 16px rgba(224,30,49,0.12);
                    }

                    /* Search input focus animation */
                    .search-input:focus {
                        outline: none;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default LocationMap;
