
import {useState} from 'react';
import CoverFiles from '../components/CoverFiles.jsx';



import ProfileSection from "../components/ProfileSection.jsx";


import haadhiImage from '../assets/images/haadhiPhoto.jpg';
import FeaturedSkills from "../components/Skills.jsx";
export default function Hero(){
    
    const [segBg , setSegBg ] = useState(`bg-gradient-to-br from-amber-900 to-purple-900`);

    setTimeout(() => {
setSegBg(`bg-gradient-to-tr from-purple-900 to-amber-800`)
    setTimeout(() => {setSegBg(`bg-gradient-to-bl  to-purple-900 from-amber-900`)} , 20000)
    return(segBg);
    }
    
    , 10000)

    return (

        
        <>
        <div className={`${segBg} transition-colors duration-8000 ease-in-out`}>
        <div className={`flex flex-col  md:flex-col md:items-center justify-center  
        sm:items-center sm:justify-center lg:flex-row gap-10  w-full md:justify-center pt-5 md:p-20  border-collapse`} id='Profile'>
        <ProfileSection name='Abdul Haadhi' role='Web Devoloper' degree='B.E..CSE' active='Fresher' img={haadhiImage} data-aos='zoom-in'  />
        <FeaturedSkills/>
        
      
        </div> 
        <CoverFiles/>
        </div>
        </>
    )
}