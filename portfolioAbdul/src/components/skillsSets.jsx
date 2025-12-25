import {skillsets} from '../contentFiles/skillSets.js';

export default function SkillSets(){

    return (
        <>
        <div className=' bg-amber-600/20 w-screen lg:m-10 p-5 shadow-lg' id='Technical-Skills'>
        <h1 className='underline'>Technical Skills</h1>
            <ul className='grid grid-cols-2 lg:grid-cols-4  gap-10 items-center justify-center m-10'>
                {skillsets.map((set , i ) => (
                    <li key={i} className='hover:bg-red-800/20  lg:h-50 lg:w-50 p-2 md:p-10 rounded-lg shadow-lg' > 
                     <img src={set.imgLink}/>
                     <h3>{set.skillName}</h3>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}