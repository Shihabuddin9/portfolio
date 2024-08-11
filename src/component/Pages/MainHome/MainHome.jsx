import useTitle from '../../../hooks/UseTitle';
import Navbar from '../Navbar/Navbar';
import './MainHome.css'
import { FaArrowDownLong, FaSquareFull } from "react-icons/fa6";

const MainHome = () => {
    useTitle('Home')
    return (
        <div id='home' className='relative'>
            <div className='flex h-screen'>
                <div className='bg-color-first w-1/2'></div>
                <div className='bg-color-second w-1/2'></div>
            </div>
            {/* <div className='md:min-h-screen flex'>
                <div className='bg-color-first md:h-screen h-[410px] w-1/2'></div>
                <div className='bg-color-second md:h-screen h-[410px] w-1/2'></div>
            </div> */}
            <div className='absolute top-0 w-full'>
                <Navbar></Navbar>
            </div>
            <div className='flex justify-center items-center'>
                {/* <div className='absolute xl:top-1/3 lg:top-28 md:top-20 top-28 text-center'> */}
                <div className='absolute top-1/3 text-center'>
                    <>
                        <h4 className='font-bold letter-space common-text-color'>HEY! I AM</h4>
                        <h4 className='font-bold md:text-7xl text-5xl-custom name-letter-space md:my-3 my-4'>Shihab Uddin</h4>
                        <h5 className='font-bold md:text-2xl text-xl'>I&apos;m a <span className='common-text-color'>Front-end developer</span></h5>

                        <div className="relative xl:mt-3 mt-2">
                            <FaSquareFull className="fas fa-square-full xl:text-7xl text-5xl rotate-45 text-center inline-block mt-5 square-text-color z-0" />
                            <FaArrowDownLong className="fas fa-arrow-down-long xl:text-xl text-sm text-blue-500 absolute top-14 left-arrow transform -translate-x-1/2 animate-move-up-down z-10 ml-1.5" />
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default MainHome;