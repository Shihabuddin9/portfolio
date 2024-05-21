import './Skills.css'

const Skills = () => {
    return (
        <div id="skill">
            <div className="">
                <h1 className="text-3xl font-extrabold common-text-color">Skills</h1>
                <div className='flex md:flex-none justify-center md:justify-start items-center'>
                    <div className='md:mt-10 mt-8 md:grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        <div className='w-64 h-80 bg-base-100 shadow-custom rounded '>
                            <h3 className='text-center pt-5 font-extrabold'>React js</h3>
                            <div className="frame">
                                <div>
                                    <div className="circle-big">
                                        <div className="text text-black">
                                            70<sup>%</sup>
                                        </div>
                                        <svg>
                                            <circle className="bg" cx="57" cy="57" r="52"></circle>
                                            <circle className="progress" cx="57" cy="57" r="52"></circle>
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
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>55%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last month</h3>
                                </div>
                            </div>
                        </div>

                        <div className='w-64 h-80 bg-base-100 shadow-custom rounded my-5 md:my-0'>
                            <h3 className='text-center pt-5 font-extrabold'>React js</h3>
                            <div className="frame">
                                <div>
                                    <div className="circle-big">
                                        <div className="text text-black">
                                            70<sup>%</sup>
                                        </div>
                                        <svg>
                                            <circle className="bg" cx="57" cy="57" r="52"></circle>
                                            <circle className="progress" cx="57" cy="57" r="52"></circle>
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
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>55%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last month</h3>
                                </div>
                            </div>
                        </div>

                        <div className='w-64 h-80 bg-base-100 shadow-custom rounded'>
                            <h3 className='text-center pt-5 font-extrabold'>React js</h3>
                            <div className="frame">
                                <div>
                                    <div className="circle-big">
                                        <div className="text text-black">
                                            70<sup>%</sup>
                                        </div>
                                        <svg>
                                            <circle className="bg" cx="57" cy="57" r="52"></circle>
                                            <circle className="progress" cx="57" cy="57" r="52"></circle>
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
                                    <h3 className='font-extrabold text-xl text-gray-900 mb-2'>55%</h3>
                                    <h3 className='text-sm text-gray-500 font-semibold'>Last month</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;