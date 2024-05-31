import image from '../../../assets/shihab-img/shihab-img.png'
import useTitle from '../../../hooks/UseTitle';
import './About.css'

const About = () => {
    useTitle('About')
    return (
        <div id='about'>
            <div className='md:flex'>
                <div className='md:w-1/2 w-full md:relative'>
                    <img className='bg-color md:absolute md:right-0' src={image} alt="" />
                </div>

                <div className='md:w-1/2 mx-5 md:mx-0'>
                    <div className='xl:mt-5 md:mt-0 mt-2  md:ml-12'>
                        <h2 className='lg:text-2xl md:text-xl font-extrabold'>About Me</h2>
                        <p className='lg:my-3 my-2 text-gray-500 lg:font-semibold md:font-medium md:text-sm lg:text-base'>I specialize in crafting visually stunning and user-friendly websites that not only look great but also perform seamlessly. With a keen eye for design and a dedication to perfection, I transform ideas into digital experiences that leave a lasting impression.</p>
                        <div className='flex justify-start'>
                            <div>
                                <ul className='lg:space-y-3 space-y-1 font-semibold'>
                                    <li>Name:</li>
                                    <li className='md:block hidden'>Date of birth:</li>
                                    <li className='md:hidden block'>birth:</li>
                                    <li>Address:</li>
                                    <li>Zip code:</li>
                                    <li>Email:</li>
                                    <li>Phone:</li>
                                </ul>
                            </div>
                            <div className='ml-7'>
                                <ul className='lg:space-y-3 space-y-1 font-semibold text-gray-500'>
                                    <li>Shihab Uddin</li>
                                    <li>September 30, 1998</li>
                                    <li>Mohakhali, Dhaka</li>
                                    <li>1212</li>
                                    <li>shihab.bd.pk@gmail.com</li>
                                    <li>+880 176549-9588</li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:mt-5 md:mt-1 my-3 md:my-0">

                            <a
                                href='https://drive.google.com/file/d/1k6_ZK9o8to30qEsz41RHLT2LhbtROefL/view?usp=sharing'
                                target="_blank" rel="noopener noreferrer"
                                className="button w-fit button--nina lg:px-5 md:px-2 px-5 py-0 common-bg-color text-white relative block focus:outline-none border-2 border-solid rounded-full text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                                data-text="DOWNLOAD CV"
                            >
                                <span className="align-middle">D</span>
                                <span className="align-middle">O</span>
                                <span className="align-middle">W</span>
                                <span className="align-middle">N</span>
                                <span className="align-middle">L</span>
                                <span className="align-middle">O</span>
                                <span className="align-middle">A</span>
                                <span className="align-middle">D</span>
                                <span className="align-middle ml-1">C</span>
                                <span className="align-middle">V</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;