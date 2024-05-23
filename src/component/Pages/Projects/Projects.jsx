import './Projects.css'
// import firstBuy from '../../../assets/projects-img/firstBuy_project_img.png'
import firstBuy from '../../../assets/projects-img/delicious-flying-humburger-fast-food_983969-71.jpg'
const Projects = () => {
    return (
        <div id="projects" className="xl:my-40 lg:my-36 md:my-32 my-24">
            <h1 className="text-center font-bold text-5xl">Our Projects</h1>
            <p className="my-10 text-center text-gray-500 text-lg">Offering expert front-end development services: responsive design, intuitive interfaces, and seamless user experiences.</p>
            <div>
                <div className=''>
                    <div className='md:grid lg:grid-cols-3 md:grid-cols-2'>

                        <div className='w-full h-80 bg-base-100 hover-bg-s-color text-center flex justify-center items-center relative h-card mb-5 md:mb-0'>
                            <img className='h-full w-full z-0' src={firstBuy} alt="firstBuy project img" />
                            <div className='z-10 h-card-show'>
                                <div className='absolute top-0 left-0  bg-[#3e65ffc0] w-full h-full'>
                                    <div className='mt-24'>
                                        <h1 className='font-semibold text-2xl text-white'>Food Delivery App</h1>
                                        <div className='mt-10'>
                                            <a href="https://github.com/Shihabuddin9/firstBuy" target="_blank" rel="noopener noreferrer">
                                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Code</button>
                                            </a>

                                            <a href="https://firstbuy.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5">Live site</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-80 bg-base-100'>
                            <div className='hover:bg-[#3e65ff97] w-full h-full text-center flex justify-center items-center'>
                                <h1>UpComing...</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;