import { MdOutlineCastForEducation } from "react-icons/md";
import Skills from "./Skills";
import useTitle from "../../../hooks/UseTitle";
import Experience from "./Experience";

const Resume = () => {
    useTitle('Resume')
    return (
        <div id="resume" className=" my-20 mx-5 md:mx-0 md:grid lg:grid-cols-6 md:grid-cols-4 gap-5">
            {/* w-2/5 */}
            <div className=" hidden md:block xl:col-span-2 lg:col-span-1 md:col-span-1">
                <div className="flex justify-center items-center left-0 top-32 sticky">
                    <ul className="font-bold text-xl space-y-4">
                        <li className="cursor-pointer hover:underline hover:text-customBlue"><a href="#education">Education</a></li>
                        <li className="cursor-pointer hover:underline hover:text-customBlue"><a href="#experience">Experience</a></li>
                        <li className="cursor-pointer hover:underline hover:text-customBlue"><a href="#skill">Skills</a></li>
                    </ul>
                </div>
            </div>
            {/* w-3/5 */}
            <div id="education" className="xl:col-span-4 lg:col-span-5 md:col-span-3">
                <div className="">
                    <h1 className="text-3xl font-extrabold common-text-color">Education</h1>
                    <div className="md:mt-10 mt-8 flex">
                        <MdOutlineCastForEducation className="common-text-color text-7xl -mt-3" />
                        <div className="ml-5">
                            <h3 className="common-text-color font-bold">2014-2015</h3>
                            <h2 className="font-bold text-xl">Bachelor of Science in Computer Science</h2>
                            <p className="text-gray-400 mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </div>
                </div>
                <hr className="md:my-10 my-7 md:mr-10" />

                <div><Experience></Experience></div>
                <hr className="md:my-10 my-7 md:mr-10" />

                <div><Skills></Skills></div>
            </div>
        </div>
    );
};

export default Resume;