import { MdOutlineCastForEducation } from "react-icons/md";

const Experience = () => {
    return (
        <div id="experience" className="ml-0">
            <h1 className="text-3xl font-extrabold common-text-color">Experience</h1>
            <div className="md:mt-10 mt-8 flex">
                <MdOutlineCastForEducation className="common-text-color text-7xl -mt-3" />
                <div className="ml-5">
                    <h3 className="common-text-color font-bold">2014-2015</h3>
                    <h2 className="font-bold text-xl">Bachelor of Science in Computer Science</h2>
                    <p className="text-gray-400 mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
            </div>

        </div>
    );
};

export default Experience;