import React from 'react';

const DisplaySkills = ({title, desctiption}) => {

    return (
        <div>
            <p className='inline-block text-2xl font-medium'>{title}</p>
        <p className='inline-block'>: {desctiption}</p>
        </div>
        
    );
    }

const DisplayProjects = ({title, description, link}) => {
    return (
        <div>
            <a href={link} className='text-2xl text-sky-700 hover:text-sky-500 font-medium'> {title} 
                </a>
                <p className='font-medium mr-52'>
                    {description}
                </p>
                <br/>
        </div>
    );
}

const Skills = () => {
    return (
        <section id="projects">
        <div className=' grid grid-cols-2 gap-4 w-full h-auto py-32'>
            <div className='mx-32'>
                <h1 className='text-5xl font-medium'>Skills</h1>
                <br/>
                <DisplaySkills title='Languages' desctiption='Python, C++, SQL'/>
                <DisplaySkills title='Tools' desctiption='Git, Github, VS Code, Tableau'/>
                <DisplaySkills title='Frameworks' desctiption='NextJS, Tailwind'/>
                <br/>
                <h1 className='text-5xl font-medium'>Education</h1>
                <br/>
                <p className='text-xl'>BS in Computer Science @ UC Riverside</p>
            </div>
                
            <div className='ml-10'>
            <h1 className='text-5xl font-medium'>Projects</h1>
                <br/>
                <DisplayProjects title='ACM @ UCR' description='Developed a website for the Association for Computing Machinery (ACM) club at UCR, 
                Used NextJS and Tailwind to build the website, Used Git and Github to collaborate with other developers'
                link='https://acm.cs.ucr.edu/'/>
                
                <br/>
                <DisplayProjects title='Cutie Sentimental' 
                description='Created Discord bot to perform sentiment analysis, Utilized OpenAi API’s natural language processing algorithm, 
                Used OpenCV’s API to analyze images and detect smiles, Created website using React.js to make it easy to add our bot to any discord server' 
                link='https://kavinphab.github.io/'/>
                
            </div>
        </div>
        </section>
    );
};

export default Skills;