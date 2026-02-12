
import { useState } from 'react';

import resumeFile from '../assets/files/AbdulHaadhiResume.pdf';

import { NotebookTabs } from 'lucide-react';




function ResumeShow({resumeState , close}){

    
    return (
        <dialog className={` ${resumeState} gap-3 flex absolute  md:left-40 z-50 flex-col bg-sky-950/60 rounded-4xl p-4 m-5 md:p-10  overflow-hidden md:h-fit md:w-3/6  items-center justify-center  ` }
        style={{ overflow:"hidden"}}  >
            <button className='m-2 md:p-4 rounded-full text-2xl h-16 w-16 hover:bg-blue-950 bg-amber-900 ' onClick={close}>X</button>
        <embed src={resumeFile} style={{ overflow:"hidden"}} className={` border-none overflow-hidden h-full `}  />
        <a href={resumeFile} className='font-bold text-3xl text-teal-200'>Open</a>
        </dialog>
    )
}

export default function CoverFiles(){
const [resumeState , setResumeState ] = useState(`hidden`);
    return (
        <>
       
        <div className='flex items-center  justify-center'>
             <ResumeShow resumeState = {resumeState} close={() => {setResumeState(`hidden`)}}/> 
            <button className=' hover:text-rose-500 p-3 text-5xl rounded' onClick={() => {setResumeState('block')}} data-aos='zoom-in'><NotebookTabs/>Resume</button>
        </div>
        </>
    )
}