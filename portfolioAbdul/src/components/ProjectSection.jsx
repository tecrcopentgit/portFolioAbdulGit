import medicalSvg from '../assets/img2/medicalSvg.svg';
import civilEnggSvg from '../assets/img2/civilEnggSvg.svg';
import collEvgSvg from '../assets/img2/collEvgSvg.svg';
import abhMedLogo from '../assets/logo/abh_med_app_logo.png';
import { useEffect } from "react";

  



const projectsets = [
    {projectTitle:' Personal Med Assist', proLogo:abhMedLogo , projectLink:'https://personalmedassist-abdul.netlify.app', projectTools:'React JS, Python ML , Node JS , POSTGRES ' , projectType:'web Devolopment and ML (Technical)' },
    {projectTitle:'Personal Mediacal Assistance', proLogo:medicalSvg , projectLink:'https://pda-med-api.onrender.com' , projectTools: 'Django,Node js ,Express , Psql' , projectType:'Web Devolopment(Technical)'},

    {projectTitle:'Civil Engineering Assistance', proLogo:civilEnggSvg , projectLink:'', projectTools:'Django (FrontEnd and BackEnd)' , projectType:'Web Devolopment(Technical)' },

    {projectTitle:'College Event Website', proLogo:collEvgSvg , projectLink:'', projectTools:'React , Node js , psql , express ' , projectType:'Web Devolopment(Technical)' },

   
]

// {projectTitle:'', proLogo:'' , projectLink:'', projectTools:'' , projectType:'' },

export default function ProjectSection(){



   


    return (
        <>
        <div id='Projects' className='bg-cyan-700/30 md:p-10  rounded md:m-10 p-4' data-aos="zoom-in">
            <h1 className='underline '>Featured Projects</h1>
            <div className='md:m-10'>
                <ul className='grid grid-1 md:grid-cols-2  gap-10 text justify-center py-10'>
                    {projectsets.map((comp , index) => (<li key={index} className='bg-lime-700/40 p-10 shadow-lg rounded hover:bg-amber-700/20 flex flex-col  items-center'>
                        <img className= 'h-20 w-20' src={comp.proLogo}/>
                        {comp.projectLink !== '' ? <a href={comp.projectLink}><h2 className='hover:text-red-800'>{comp.projectTitle}</h2></a>  : <h2>{comp.projectTitle}</h2>}

<span className='font-light'>{comp.projectTools}</span>
<p className='font-mono'>{`worked on ${comp.projectType}`}</p>

                    </li>))}
                </ul>
            </div>
            
        </div>
        </>
    )
}