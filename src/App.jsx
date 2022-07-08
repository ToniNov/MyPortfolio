import "./app.scss"
import {Intro} from "./components/intro/Intro";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Works} from "./components/works/Works";
import {Contact} from "./components/contact/Contact";
import {MenuContainer} from "./components/menuContainer";



function App() {
    return (
        <div className="app">
           <MenuContainer/>
            <div className="sections">
                <Intro/>
                <AboutMe/>
                <Works/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;