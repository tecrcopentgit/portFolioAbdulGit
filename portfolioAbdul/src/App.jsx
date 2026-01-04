

import Header from "./components/Header";
import SkillSets from "./components/skillsSets";
import AcademicSection from "./heroSections/AcademicSection";
import Hero from "./heroSections/Hero";
import CommunicationSection from "./components/CommunicationSection.jsx";
import ProjectSection from './components/ProjectSection.jsx';
import Footer from "./components/Footer.jsx";



const bgImgurl = './assets/img2/bgImg.jpg';

export default function App(){

  return(
    <>
    <div className="  bg-gradient-to-r  from-amber-800 to-purple-600  min-h-screen w-screen  text-center  items-center 
    bg-cover bg-[url('./assets/img2/bgImg.jpg')] font-bold ">  
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