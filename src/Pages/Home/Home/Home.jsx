import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
// import AboutSection from "../AboutSection/AboutSection";
import Skill from "../Skill/Skill";
import Contact from "../ContactSection/ContactSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>{`Home - Tanvir Hasan Tonmoy' s Log`}</title>
            </Helmet>
            <Banner></Banner>
            <Skill></Skill>
            <Projects></Projects>
            {/* <AboutSection></AboutSection> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;