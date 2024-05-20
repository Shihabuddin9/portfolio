import { MdOutlineCastForEducation } from "react-icons/md";

const Resume = () => {
    return (
        <div id="resume" className="my-20 flex mx-5 md:mx-0">
            <div className="w-2/5 hidden md:block">
                <div className="flex justify-center items-center">
                    <ul className="font-bold text-xl space-y-4">
                        <li className="cursor-pointer hover:underline">Education</li>
                        <li className="cursor-pointer hover:underline">Experience</li>
                        <li className="cursor-pointer hover:underline">Skills</li>
                    </ul>
                </div>
            </div>
            <div className="md:w-3/5">
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
                <div>second</div>
            </div>
        </div>
    );
};

export default Resume;