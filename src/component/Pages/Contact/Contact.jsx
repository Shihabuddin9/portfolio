import { ImAddressBook } from "react-icons/im";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div id="contact" className="xl:mt-40 lg:mt-36 md:mt-32 mt-24">
            <h1 className="text-center font-bold text-5xl">Contact Me</h1>
            <p className="my-10 text-center text-gray-500 text-lg">Reach out for inquiries or collaboration. Contact me. I&apos;m looking forward to connecting with you!</p>
            <div className="md:flex justify-center items-center mx-5 lg:mx-0">
                <div className='md:mt-10 mt-8 md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:gap-5 lg:gap-10 md:gap-5 space-y-5 md:space-y-0'>

                    <div className='w-full md:w-80 lg:w-64 h-80 bg-base-100 shadow-custom text-center flex justify-center items-center'>
                        <div className='mx-5'>
                            <h3 className=' text-2xl h-text-white inline-block 
                            text-white bg-[#3E64FF] p-10 rounded-full'><ImAddressBook className='' /></h3>
                            <div className='my-5'>
                                <h4 className='mb-2 font-medium text-xl'>Address</h4>
                            </div>
                            <p className=' h-text-black'>Mohakhali, Dhaka 1212</p>
                        </div>
                    </div>

                    <div className='w-full md:w-80 lg:w-64 h-80 bg-base-100 shadow-custom text-center flex justify-center items-center'>
                        <div className='mx-5'>
                            <h3 className=' text-2xl inline-block text-white bg-[#3E64FF] p-10 rounded-full'><FaPhoneAlt className='' /></h3>
                            <div className='my-5'>
                                <h4 className='mb-2 font-medium text-xl'>Contact Number</h4>
                            </div>
                            <p className='text-[#3e65ffd9] font-semibold'>+001 7654-99588</p>
                        </div>
                    </div>

                    <div className='w-full md:w-80 lg:w-64 h-80 bg-base-100 shadow-custom text-center flex justify-center items-center'>
                        <div className='mx-5'>
                            <h3 className=' text-2xl inline-block text-white bg-[#3E64FF] p-10 rounded-full'><MdEmail className='' /></h3>
                            <div className='my-5'>
                                <h4 className='mb-2 font-medium text-xl'>Email Address</h4>
                            </div>
                            <a href="mailto:shihab.bd.pk@gmail.com" target="_blank" rel="noopener noreferrer">
                                <p className='text-[#3e65ffd9] font-semibold hover:underline'>shihab.bd.pk@gmail.com</p>
                            </a>
                        </div>
                    </div>

                    <div className='w-full md:w-80 lg:w-64 h-80 bg-base-100 shadow-custom text-center flex justify-center items-center'>
                        <div className='mx-5'>
                            <h3 className=' text-2xl inline-block text-white bg-[#3E64FF] p-10 rounded-full'><FaGithub className='' /></h3>
                            <div className='my-5'>
                                <h4 className='mb-2 font-medium text-xl'>GitHum</h4>
                            </div>
                            <a href="https://github.com/Shihabuddin9" target="_blank" rel="noopener noreferrer">
                                <p className='text-[#3e65ffd9] font-semibold hover:underline'>Explore GitHub</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;