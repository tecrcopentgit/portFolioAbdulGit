


export default function ProfileSection({ img , name , degree , role }){
    return (
        <>
        <div className='bg-black/40 flex flex-col w-screen md:flex-col  md:w-fit md:flex-row items-center gap-5 py-10 md:p-10 text-center font-thin rounded '>
        <div ><img className= 'rounded-full h-40 w-40 border-orange border-2 hover:opacity-55'src={img} alt={`${name} 's profile picture loading....`} /></div>
        <div    >
             <h2>{name}</h2>
        <span>{degree}</span>
        <p >{role}</p>
        </div>
        
        
        </div>
        
        </>
    )
}