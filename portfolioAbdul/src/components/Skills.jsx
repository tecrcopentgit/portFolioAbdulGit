
import { featuredSkills } from "../contentFiles/skillSets"



export default function FeaturedSkills(){


    return (
        <>
        <div className='bg-red-950/20  items-center justify-center text-center md:p-10 shadow-xl p-10 slide-up'>
        <h1 className='underline'>Featured Skills</h1>
            <ul className='grid grid-rows-1 grid-cols-4 md:mt-10 gap-2 p-5 ' >
                {featuredSkills.map((set , i) => (
                    <li key={i} className=' bg-gradient-to-br from-purple-600/50
                     to-amber-800/40 hover:bg-black/20  p-2  lg:p-10 item-center rounded shadow-lg f' data-aos='zoom-out-right'>
                       
                        <div className='lg:w-30 lg:h-30 h-10 w-10 gap-10'>
                        
                            <img src={set.imgLink}/>
                            <h3 className="p-4 px-0">{set.skillName} </h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}


