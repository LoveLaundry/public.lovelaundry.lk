import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./ll-theme";
import { LanguageProvider } from "./i18n";
import "./index.css";
import "./ll-design-tokens.css";
import "./animations.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <MotionConfig reducedMotion="user">
                <LanguageProvider>
                    <App />
                </LanguageProvider>
            </MotionConfig>
        </ThemeProvider>
    </StrictMode>
);
