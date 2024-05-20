import Navbar from '../Navbar/Navbar';
import './MainHome.css'
import { FaArrowDownLong, FaSquareFull } from "react-icons/fa6";

const MainHome = () => {
    return (
        <div className='relative'>
            <div className='min-h-screen flex'>
                <div className='bg-color-first h-screen w-1/2'></div>
                <div className='bg-color-second h-screen w-1/2'></div>
            </div>
            <div className='absolute top-0 w-full'>
                <Navbar></Navbar>
            </div>
            <div className='flex justify-center items-center'>
                <div className='absolute lg:top-1/3 md:top-32 top-20 text-center'>
                    <>
                        <h4 className='font-bold letter-space common-text-color'>HEY! I AM</h4>
                        <h4 className='font-bold md:text-7xl text-5xl name-letter-space my-3'>Shihab Uddin</h4>
                        <h5 className='font-bold md:text-2xl text-xl'>I&apos;m a <span className='common-text-color'>Font-end developer</span></h5>

                        <div className="relative">
                            <FaSquareFull className="fas fa-square-full text-7xl rotate-45 text-center inline-block mt-5 square-text-color z-0" />
                            <FaArrowDownLong className="fas fa-arrow-down-long text-xl text-blue-500 absolute top-14 left-arrow transform -translate-x-1/2 animate-move-up-down z-10" />
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default MainHome;