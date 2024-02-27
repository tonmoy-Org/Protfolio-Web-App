import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";

import Skill from "../Skill/Skill";
import Contact from "../ContactSection/ContactSection";
import CurrentWork from "../CurrenWork/CurrentWork";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>{`Home - Tanvir Hasan Tonmoy' s Log`}</title>
            </Helmet>
            <Banner></Banner>
            <Skill></Skill>
            <CurrentWork></CurrentWork>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;