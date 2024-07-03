import './Skills.css'

const skillsData = [
    {
        name: 'JavaScript',
        percentage: 80,
        lastWeek: 20,
        lastMonth: 60
    },
    {
        name: 'React js',
        percentage: 75,
        lastWeek: 20,
        lastMonth: 55
    },
    {
        name: 'TypeScript',
        percentage: 85,
        lastWeek: 15,
        lastMonth: 70
    },
    {
        name: 'Next JS',
        percentage: 65,
        lastWeek: 15,
        lastMonth: 40
    }
];

const progressData = [
    { name: 'HTML5', value: 90 },
    { name: 'CSS3', value: 95 },
    { name: 'Tailwind', value: 90 },
    { name: 'Bootstrap', value: 65 },
    { name: 'Redux', value: 65 },
    { name: 'Flux', value: 60 },
    { name: 'jest', value: 55 },
    { name: 'Material ui', value: 60 }
];

const SkillCard = ({ name, percentage, lastWeek, lastMonth }) => (
    <div className='md:w-64 h-80 bg-base-100 shadow-custom rounded my-5 md:my-0'>
        <h3 className='text-center pt-5 font-extrabold'>{name}</h3>
        <div className="frame">
            <div className="circle-big">
                <div className="text text-black">
                    {percentage}<sup>%</sup>
                </div>
                <svg>
                    <circle className="bg" cx="57" cy="57" r="52"></circle>
                    <circle className={`progress progress${name.replace(/\s+/g, '').toLowerCase()}`} cx="57" cy="57" r="52"></circle>
                </svg>
            </div>
        </div>
        <div className='flex justify-around items-center'>
            <div className='text-center'>
                <h3 className='font-extrabold text-xl text-gray-900 mb-2'>{lastWeek}%</h3>
                <h3 className='text-sm text-gray-500 font-semibold'>Last week</h3>
            </div>
            <div className='border-r-2 h-12 w-2'></div>
            <div className='text-center'>
                <h3 className='font-extrabold text-xl text-gray-900 mb-2'>{lastMonth}%</h3>
                <h3 className='text-sm text-gray-500 font-semibold'>Last month</h3>
            </div>
        </div>
    </div>
);

const TaskProgress = ({ name, value }) => (
    <div className="task-progress">
        <p>
            <span className='font-medium text-gray-900 text-lg'>{name}</span>
            <span className='font-medium text-gray-900 text-lg'>{value}%</span>
        </p>
        <progress className="progress progress1" max="100" value={value}></progress>
    </div>
);

const Skills = () => {
    return (
        <div id="skill" className=''>
            <div className="">
                <h1 className="text-3xl font-extrabold common-text-color">Skills</h1>
                {/* Radial progress */}
                <div className='md:flex md:justify-start md:items-center'>
                    <div className='md:mt-10 mt-8 md:grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        {skillsData.map(skill => (
                            <SkillCard
                                key={skill.name}
                                name={skill.name}
                                percentage={skill.percentage}
                                lastWeek={skill.lastWeek}
                                lastMonth={skill.lastMonth}
                            />
                        ))}
                    </div>
                </div>
                {/* progress */}
                <div className='mt-16 lg:w-4/5 md:mr-9 lg:mr-0'>
                    <div className='md:grid grid-cols-2 gap-5 space-y-6 md:space-y-0'>
                        {progressData.map(progress => (
                            <TaskProgress
                                key={progress.name}
                                name={progress.name}
                                value={progress.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
