import LandingPageButtons from "../component/LandingPageButtons";
import LandingPageLogo from "../component/LandingPageLogo";
import LandingPageWelcome from "../component/LandingPageWelcome";
import '../styles/index.css';



export function LandingPage() {
    return (
        <div>
            <LandingPageLogo/>
            <LandingPageWelcome/>
            <LandingPageButtons/>
        </div>
    )
}