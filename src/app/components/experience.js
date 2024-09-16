import React from 'react';

const Details = ({position, company, companyLink, time, address, work}) => {
    return <li className='flex flex-col items-center'>
        <div>
            <h3 className='font-bold text-2xl'>{position} @&nbsp;<a href={companyLink} className='text-sky-500 hover:text-sky-300'>{company}</a> </h3>
            <div className='font-medium opacity-75'>
                {time} | {address}
            </div>
            <p className='font-medium'>
                {work}
            </p>
        </div>
    </li>
};

const Experience = () => {
return (
    // bg-gradient-to-b from-slate-400 to-slate-300
    <section id="experience">
    <div className=' h-auto w-full pb-10 bg-purple py-32'>
        
        <h1 className='text-5xl text-center font-extrabold'>Experience</h1>
        <br/>

        <div className='absolute left-8 top-0 h-full origin-top'/>
        <ul>
        <div className='w-[75%] mx-auto relative mb-8'>
            <Details position="Machine Learning Intern" company="NAVFAC EXWC" companyLink="https://exwc.navfac.navy.mil/" 
            time="June 2023 - August 2023" address="Port Hueneme, CA" 
            work="Implemented a convolutional neural network using TensorFlow to perform image classification,
             Led research in application of physics-informed neural networks in modeling corrosion using diffusion-reaction equation,
             Optimized TensorFlow natural language processing network through data preprocessing and dataset management"/>
        </div>
        </ul>
        <ul>
        <div className='w-[75%] mx-auto relative  mb-8'>
            <Details position="Data Science Intern" company="Monet Analytics" companyLink="https://www.monetanalytics.com/#/" 
            time="June 2022 - October 2022" address="Riverside, CA" 
            work="Increased accuracy of TikTok audience response score to 87% through creating a multivariate algorithm,
            Utilized step-wise regression, recursive feature elimination, dimensionality reduction, and OLS,
            Used R and Python to create a model that outputted score indicating performance on TikTok, Model presented to company stakeholders and used in production"/>
        </div>
        </ul>
        <ul>
        <div className='w-[75%] mx-auto relative '>
            <Details position="Lead Data Analyst Intern" company="Healthy Acres" companyLink="https://healthyacres.farm/" 
            time="June 2021 - August 2021" address="Moorpark, CA" 
            work="  Consolidated and analyzed import data on various forms of Moringa using Tableau,
            Identified opportunities for Healthy Acres to expand their business, Conducted market research to identify the best places to sell the Moringa product,
             Successfully presented opportunity to sell Moringa in powder form to the stakeholders with facts and figures"/>
        </div>
        </ul>
        </div>
        </section>


);
};

export default Experience;