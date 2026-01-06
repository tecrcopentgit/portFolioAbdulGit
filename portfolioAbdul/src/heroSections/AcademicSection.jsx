import annaUniversitySvg from '../assets/images/annaUniversitySvg.svg';
import nellaiCollegeLogo from '../assets/images/nellaiCollegeLogo.png';

import Academic_Details from "../components/Academic_Details.jsx"

export default function AcademicSection(){

    return(
        <>
        <div className='bg-blue-950/30 text-center   p-10 my-5  ' data-aos='slide-in' >
        <h1 className='underline'>Institute</h1>
           <Academic_Details 
           collegeName="Nellai College of Engineering"
           universityName="Anna University "
           batch = "2022 - 2026"
           degreeName = "B.E. Computer Science and Engineering"
           collegeImg={nellaiCollegeLogo}  universityImg={annaUniversitySvg}
           passOut='2026'
           /> 
        </div>
        </>
    )
}