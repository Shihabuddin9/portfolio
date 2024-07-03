import './Services.css'
import { LuSearchCode } from "react-icons/lu";
import { MdDeveloperBoard } from "react-icons/md";
import { FaReact } from "react-icons/fa";

const servicesData = [
    {
        icon: <LuSearchCode />,
        title: "Web Design",
        description: "Blending technical skills and creativity, I collaborate to bring your vision to life, delivering high-quality, precise, and creative web designs."
    },
    {
        icon: <FaReact />,
        title: "React Developer",
        description: "Combining expertise in React.js with innovative design, I deliver dynamic, high-performance applications tailored to exceed client expectations."
    },
    {
        icon: <MdDeveloperBoard />,
        title: "Web Developer",
        description: "Combining technical expertise with creative design, I deliver responsive, high-performance websites that meet client needs and exceed expectations."
    }
];

const ServiceCard = ({ icon, title, description }) => (
    <div className='w-full h-80 bg-base-100 shadow-custom hover-bg-color text-center flex justify-center items-center my-5 md:my-0'>
        <div className='mx-5'>
            <div className='text-6xl common-text-color h-text-white inline-block'>{icon}</div>
            <div className='my-10'>
                <h4 className='mb-2 letter-space font-medium uppercase'>{title}</h4>
                <hr className='w-10 mx-auto' />
            </div>
            <p className='h-text-black'>{description}</p>
        </div>
    </div>
);

const Services = () => {
    return (
        <div id="services" className="mx-5 md:mx-12">
            <h1 className="text-center font-bold text-5xl">Services</h1>
            <p className="my-10 text-center text-gray-500 text-lg">
                Offering expert front-end development services: responsive design, intuitive interfaces, and seamless user experiences.
            </p>
            <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
