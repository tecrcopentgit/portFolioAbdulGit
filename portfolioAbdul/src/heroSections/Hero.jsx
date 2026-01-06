import ProfileSection from "../components/ProfileSection.jsx";


import haadhiImage from '../assets/images/haadhiPhoto.jpg';
import FeaturedSkills from "../components/Skills.jsx";
export default function Hero(){

    return (
        <>
        <div className='flex flex-col md:flex-col md:items-center justify-center sm:items-center sm:justify-center 
         lg:flex-row gap-10  w-full md:justify-center pt-5 md:p-20 easer ' id='Profile'>
        <ProfileSection name='Abdul Haadhi' role='Web Devoloper' degree='B.E..CSE' img={haadhiImage} data-aos='zoom-in'  />
        <FeaturedSkills/>
        
        </div>
        </>
    )
}