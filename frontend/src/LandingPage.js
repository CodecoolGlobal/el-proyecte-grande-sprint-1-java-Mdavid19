import LandingPageButtons from "./component/LandingPageButtons";
import LandingPageLogo from "./component/LandingPageLogo";
import LandingPageWelcome from "./component/LandingPageWelcome";
import './landingpage.css';
import './style.css'


export function LandingPage() {
    return (
        <div>
            <LandingPageLogo/>
            <LandingPageWelcome/>
            <LandingPageButtons/>
        </div>
    )
}