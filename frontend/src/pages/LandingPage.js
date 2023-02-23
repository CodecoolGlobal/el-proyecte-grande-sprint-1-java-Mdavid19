import LandingPageButtons from "../component/LandingPageButtons";
import LandingPageLogo from "../component/LandingPageLogo";
import LandingPageWelcome from "../component/LandingPageWelcome";
import '../styles/index.css';
import '../styles/LandingPage.css';



export function LandingPage() {
    return (
        <div>
            <LandingPageLogo/>
            <LandingPageWelcome/>
            <LandingPageButtons/>
        </div>
    )
}