import './Skills.css'

const Skills = () => {
    return (
        <div id="skill" className=''>
            <div className="">
                <h1 className="text-3xl font-extrabold common-text-color">Skills</h1>
                {/* Radial progress */}
                <div className='md:flex md:justify-start md:items-center'>
                    <div className='md:mt-10 mt-8 md:grid lg:grid-cols-3 md:grid-cols-2 gap-5'>

                        <div className='md:w-64 h-80 bg-base-100 shadow-custom rounded '>
                            <h3 className='text-center pt-5 font-extrabold'>React js</h3>
                            <div className="frame">
                                <div>
                                    <div className="circle-big">
                                        <div className="text text-black">
                                            80<sup>%</sup>
                                        </div>
                                        <svg>
                                            <circle className="bg" cx="57" cy="57" r="52"></circle>
                                            <circle className="progress progress1" cx="57" cy="57" r="52"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-around items-center'>
                                <div className='text-center'>
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>20%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last week</h3>
                                </div>
                                <div className='border-r-2 h-12 w-2'></div>
                                <div className='text-center'>
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>60%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last month</h3>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-64 h-80 bg-base-100 shadow-custom rounded my-5 md:my-0'>
                            <h3 className='text-center pt-5 font-extrabold'>JavaScript</h3>
                            <div className="frame">
                                <div>
                                    <div className="circle-big">
                                        <div className="text text-black">
                                            75<sup>%</sup>
                                        </div>
                                        <svg>
                                            <circle className="bg" cx="57" cy="57" r="52"></circle>
                                            <circle className="progress progress2" cx="57" cy="57" r="52"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-around items-center'>
                                <div className='text-center'>
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>20%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last week</h3>
                                </div>
                                <div className='border-r-2 h-12 w-2'></div>
                                <div className='text-center'>
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>55%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last month</h3>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-64 h-80 bg-base-100 shadow-custom rounded'>
                            <h3 className='text-center pt-5 font-extrabold'>TypeScript</h3>
                            <div className="frame">
                                <div>
                                    <div className="circle-big">
                                        <div className="text text-black">
                                            85<sup>%</sup>
                                        </div>
                                        <svg>
                                            <circle className="bg" cx="57" cy="57" r="52"></circle>
                                            <circle className="progress progress3" cx="57" cy="57" r="52"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-around items-center'>
                                <div className='text-center'>
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>15%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last week</h3>
                                </div>
                                <div className='border-r-2 h-12 w-2'></div>
                                <div className='text-center'>
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>70%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last month</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* progress */}
                <div className='mt-16 lg:w-4/5 md:mr-9 lg:mr-0'>
                    <div className='md:grid grid-cols-2 gap-5 space-y-6 md:space-y-0'>
                        <div className="task-progress">
                            <p><span className='font-medium text-gray-900 text-lg'>HTML5</span>
                                <span className='font-medium text-gray-900 text-lg'>90%</span>
                            </p>
                            <progress className="progress progress1" max="100" value="90"></progress>
                        </div>
                        <div className="task-progress">
                            <p><span className='font-medium text-gray-900 text-lg'>CSS3</span>
                                <span className='font-medium text-gray-900 text-lg'>95%</span>
                            </p>
                            <progress className="progress progress1" max="100" value="95"></progress>
                        </div>
                        <div className="task-progress">
                            <p><span className='font-medium text-gray-900 text-lg'>Tailwind</span>
                                <span className='font-medium text-gray-900 text-lg'>90%</span>
                            </p>
                            <progress className="progress progress1" max="100" value="90"></progress>
                        </div>
                        <div className="task-progress">
                            <p><span className='font-medium text-gray-900 text-lg'>Bootstrap</span>
                                <span className='font-medium text-gray-900 text-lg'>65%</span>
                            </p>
                            <progress className="progress progress1" max="100" value="65"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Skills;