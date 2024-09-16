import React from 'react';

const DisplayActivities = ({title, description,link}) => {
    
        return (
            <div>
                <p className='inline-block text-2xl font-medium'>{title}</p>
            <p>{description}</p>
            </div>
            
        );
        }


const Activities = () => {
    return (
        <section id="extracurricular">

        
        <div className='w-full h-auto pb-20'>
            <h1 className='text-5xl font-extrabold text-center'>Extracurricular Activities</h1>
            <br/>
            <div className='flex justify-center gap-80'>
                <div> 
                    <DisplayActivities title='Highlander Racing' description='UCR Formula SAE team, part of firmware team'/>
                    <br/>
                    <DisplayActivities title='ACM @ UCR' description='UCR Association for Computing Machinery'/>
                    
                    
                </div>
                
                
                <div>
                    <DisplayActivities title='GIS @ UCR' description='Founder of UCR Geographic Information Systems'/>
                    <br/>
                    <DisplayActivities title='Intamural Sports' description='Basketball, Tennis, Soccer'/>
                    
                    
                </div>
                
                
            </div>
            
            
                
                
        
        </div>
        </section>
    );
}

export default Activities;

