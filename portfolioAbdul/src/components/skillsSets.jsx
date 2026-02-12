import {skillsets} from '../contentFiles/skillSets.js';

export default function SkillSets(){

    return (
        <>
        <div className=' bg-cyan-700/30 md:p-10  rounded md:m-10 p-5 my-5' id='Technical-Skills' data-aos='fade-up'>
        <h1 className='underline'>Technical Skills</h1>
            <ul className='grid grid-cols-2 lg:grid-cols-4  gap-10 items-center justify-center m-10 '>
                {skillsets.map((set , i ) => (
                    
                    <li key={i} className='bg-gradient-to-b from-cyan-600/20 to-green-500/50 hover:bg-red-800/20
                     lg:hover:bg-green-800/20  lg:h-50 lg:w-50 p-2 md:p-10 rounded-lg shadow-lg' data-aos='slide-up' > 
                     <img src={set.imgLink}/>
                     <h3>{set.skillName}</h3>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}