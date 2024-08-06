import image from '../../../assets/shihab-img/shihab-img.png'
import useTitle from '../../../hooks/UseTitle';
import './About.css'

const About = () => {
    useTitle('About')
    return (
        <div id='about'>
            <div className='md:flex mt-20'>
                <div className='md:w-1/2 w-full md:relative md:ml-5 p-5'>
                    <img className='md:absolute xl:top-24 lg:top-28 md:top-24 right-0 bg-linear-gradient md:h-[500px] h-[450px] md:w-[400px] w-[380px]' src={image} alt="" />
                </div>

                <div className='md:w-1/2 mx-5 md:mx-0'>
                    <div className='xl:mt-5 md:mt-0 mt-2  md:ml-4'>
                        <h2 className='lg:text-2xl md:text-xl font-extrabold'>About Me</h2>

                        <p className='text-gray-900 md:text-sm lg:text-base '>Hi there! I’m Shihab, a passionate front-end developer with a keen interest in creating engaging and intuitive user experiences. After completing my Higher Secondary Certificate (HSC) education, I decided to pursue my fascination with technology and dive into the world of front-end development.</p>

                        <p className='text-gray-700 md:text-sm lg:text-base my-2'>With a solid foundation in HTML, CSS, and JavaScript, I specialize in building responsive and dynamic web applications using modern frameworks like React and Next.js. My journey has involved working on diverse projects, from designing interactive UI components to optimizing performance and ensuring cross-browser compatibility.</p>

                        <p className='text-gray-600 md:text-sm lg:text-base mb-2'>I’m particularly excited about leveraging my skills to contribute to innovative and user-centric solutions. My goal is to continually improve my craft and stay updated with the latest industry trends and best practices. I’m driven by the challenge of turning complex problems into simple, elegant designs and am always eager to collaborate with others who share a passion for creating exceptional web experiences.</p>

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