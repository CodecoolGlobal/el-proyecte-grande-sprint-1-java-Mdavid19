import './style.css';
import LandingPageLogo from "./component/LandingPageLogo";
import LandingPageWelcome from "./component/LandingPageWelcome";
import LandingPageButtons from "./component/LandingPageButtons";

function App() {
    return (
        <div>
            <LandingPageLogo/>,
            <LandingPageWelcome/>
            <LandingPageButtons />
        </div>
    );
}

export default App;
