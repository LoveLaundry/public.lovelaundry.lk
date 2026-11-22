import LandingPage from "./pages/LandingPage";
import CursorSpotlight from "./components/fx/CursorSpotlight";
import ScrollProgress from "./components/fx/ScrollProgress";
import { useCinematicScroll } from "./hooks/useCinematicScroll";
import { usePointerEffects } from "./hooks/usePointerEffects";

const App = () => {
    usePointerEffects();
    useCinematicScroll();

    return (
        <div className="fx-root relative min-h-screen">
            <ScrollProgress />
            <CursorSpotlight />
            <LandingPage />
        </div>
    );
};

export default App;
