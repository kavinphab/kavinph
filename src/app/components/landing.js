import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";


const Landing = () => {
    return (
        <section id="home">
        <div className='w-full h-[95vh] flex justify-center items-center bg-gradient-to-b from-slate-700 to-slate-500'>
            
            <div>
                <h1 className='text-6xl'>Kavin Phabiani</h1>
                <br/>
                <p className='flex justify-center'>Student | Aspiring Software Engineer</p>
                <div className='mt-5 flex space-x-4 place-content-center'>
                    <a href="https://www.linkedin.com/in/kavin-phabiani/" className='text-black '>
                        
                            {<FaLinkedin className='text-2xl hover:scale-110' /> }
                    </a>
                    <a href="https://github.com/kavinphab" className='text-black '>
                        {<FaGithub className='text-2xl hover:scale-110' /> }
                    </a>

                    <a href='https://drive.google.com/file/d/12NZ-cteed4n5ssi3mqonCR-ePQEUl3_f/view?usp=sharing' className='text-black'>
                        <RiFilePaper2Line className='text-2xl hover:scale-110'/>
                    </a>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default Landing;
