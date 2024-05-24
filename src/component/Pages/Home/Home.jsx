import Resume from '../Resume/Resume'
import About from '../About/About'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import MainHome from '../MainHome/MainHome'
import SendMessage from '../SendMessage/SendMessage'

const Home = () => {
    return (
        <div>
            <MainHome></MainHome>
            <About></About>
            <Resume></Resume>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
            <SendMessage></SendMessage>
        </div>
    );
};

export default Home;