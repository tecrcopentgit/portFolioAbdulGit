


export default function ProfileSection({ img , name , degree , role , active }){
    return (
        <>
        <div className=' flex flex-col w-screen md:flex-col  md:w-fit  items-center gap-5 py-10 md:p-10 text-center font-mono rounded '>
        <div ><img className= 'rounded-full h-40 w-40 border-l-purple-600 border-2 hover:opacity-55 shadow-stone-800 shadow-xl'
        src={img} alt={`${name} 's profile picture loading....`} data-aos='flip-left'/></div>
        <div>
             <h2>{name}</h2>
        <span>{degree}</span>
        <p className=''>{role}</p>
        <p >{`(${active})`}</p>
        </div>
        
        
        </div>
        
        </>
    )
}