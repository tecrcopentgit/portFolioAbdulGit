
import {useEffect} from 'react';
import Header from "./components/Header";
import SkillSets from "./components/skillsSets";
import AcademicSection from "./heroSections/AcademicSection";
import Hero from "./heroSections/Hero";

import CommunicationSection from "./components/CommunicationSection.jsx";
import ProjectSection from './components/ProjectSection.jsx';
import Footer from "./components/Footer.jsx";


import 'aos/dist/aos.css';

import AOS from "aos";




const bgImgurl = './assets/img2/bgImg.jpg';

export default function App(){

  
useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,   
      offset: 120,    
    });
  }, []);
  

  

  return(
    <>
    <div className=" min-h-screen w-screen  text-center  items-center 
    bg-cover bg-[url('./assets/img2/bgImg.jpg')] bg-center  font-bold  font-sans-serif">  
      <Header/>
      <Hero/>
      <AcademicSection/>
      <ProjectSection/>
      <SkillSets/>
      <CommunicationSection/>
      <Footer/>
    </div>
    </>
  )
}