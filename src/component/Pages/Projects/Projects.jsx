import './Projects.css'
import firstBuy from '../../../assets/projects-img/delicious-flying-humburger-fast-food_983969-71.jpg'

const projects = [
    {
        title: "Food Delivery App",
        image: firstBuy, // Update with the correct path to the image
        codeLink: "https://github.com/Shihabuddin9/firstBuy",
        liveSiteLink: "https://firstbuy.netlify.app/",
        alt: "firstBuy project img"
    },
    {
        title: "Upcoming...",
        image: null,
        codeLink: null,
        liveSiteLink: null,
        alt: null
    }
];

const ProjectCard = ({ title, image, codeLink, liveSiteLink, alt }) => (
    <div className='w-full h-80 bg-base-100 hover:bg-s-color text-center flex justify-center items-center relative h-card mb-5 md:mb-0'>
        {image ? (
            <img className='h-full w-full z-0' src={image} alt={alt} />
        ) : (
            <div className='hover:bg-[#3e65ff97] w-full h-full text-center flex justify-center items-center'>
                <h1>{title}</h1>
            </div>
        )}
        {codeLink && liveSiteLink && (
            <div className='z-10 h-card-show'>
                <div className='absolute top-0 left-0 bg-[#3e65ffc0] w-full h-full'>
                    <div className='mt-24'>
                        <h1 className='font-semibold text-2xl text-white'>{title}</h1>
                        <div className='mt-10'>
                            <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Code
                                </button>
                            </a>
                            <a href={liveSiteLink} target="_blank" rel="noopener noreferrer" className="ml-5">
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Live site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

const Projects = () => (
    <div id="projects" className="xl:my-40 lg:my-36 md:my-32 my-24">
        <h1 className="text-center font-bold text-5xl">Our Projects</h1>
        <p className="my-10 text-center text-gray-500 text-lg">
            I created some websites to showcase my projects, skills, and experience as a web developer.
        </p>
        <div className='md:grid lg:grid-cols-3 md:grid-cols-2'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    image={project.image}
                    codeLink={project.codeLink}
                    liveSiteLink={project.liveSiteLink}
                    alt={project.alt}
                />
            ))}
        </div>
    </div>
);

export default Projects;
