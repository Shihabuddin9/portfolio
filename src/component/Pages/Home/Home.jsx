import Navbar from "../Navbar/Navbar";
import Resume from '../Resume/Resume'
import About from '../About/About'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import MainHome from '../MainHome/MainHome'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainHome></MainHome>
            <About></About>
            <Resume></Resume>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;