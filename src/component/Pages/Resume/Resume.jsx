import { MdOutlineCastForEducation } from "react-icons/md";
import Skills from "./Skills";
import useTitle from "../../../hooks/UseTitle";
import Experience from "./Experience";

const Resume = () => {
    useTitle('Resume')
    return (
        <div id="resume" className="xl:my-40 lg:my-36 md:my-32 my-24  mx-5 md:mx-0 md:grid lg:grid-cols-6 md:grid-cols-4 gap-5">
            {/* w-2/5 */}
            <div className=" hidden md:block xl:col-span-2 lg:col-span-1 md:col-span-1">
                <div className="flex justify-center items-center left-0 top-32 sticky">
                    <ul className="font-bold text-xl space-y-4 text-gray-950">
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
                            <h3 className="common-text-color font-bold">2018-2019</h3>
                            <h2 className="font-bold text-xl">-</h2>
                            <p className="text-gray-800 mt-3">I completed my HSC education but did not continue my studies after that. Since then I liked to work with different technologies. Next I chose front-end developer. And want to do something good with it in the future.</p>
                        </div>
                    </div>
                </div>
                <hr className="md:my-10 my-7 md:mr-10" />

                <div className="xl:mt-20 mt-16"><Experience></Experience></div>
                <hr className="md:my-10 my-7 md:mr-10" />

                <div className="xl:mt-20 mt-16"><Skills></Skills></div>
            </div>
        </div>
    );
};

export default Resume;