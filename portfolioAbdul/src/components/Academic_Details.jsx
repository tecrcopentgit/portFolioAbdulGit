

export default function Academic_Details({ collegeName , universityName , batch , degreeName , collegeImg , universityImg , passOut}){

    return (
        <>
        <div  className= 'flex items-center justify-center gap-10 py-5  ' data-aos='flip-up'>

<div >
    <img  src={collegeImg}  className=' h-10 lg:h-20'/>
    <h2>{collegeName}</h2>
   
</div>

<div >

    <img  src={universityImg} className='h-20 md:pl-30 px-5'/>
    <h2>{universityName}</h2>
    <p>{degreeName} {batch}</p>
    <p>Year of Passout:{passOut}</p>
    
</div>

        </div>
        </>
    )
}