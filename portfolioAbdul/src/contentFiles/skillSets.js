import reactSvg from '../assets/images/reactSvg.svg';
import pythonSvg from '../assets/images/pythonSvg.svg';
import djangoSvg from '../assets/images/djangoSvg.svg';
import javaScriptSvg from '../assets/images/javaScriptSvg.svg';
import tailWindCssSvg from '../assets/images/tailWindCssSvg.svg';
import frontEndSvg from '../assets/images/frontEndSvg.svg';
import backEndSvg from '../assets/images/backEndSvg.svg';
import dataBaseSvg from '../assets/images/dataBaseSvg.svg';


// {skillName:'',imgLink:'', isFeatured:false}
export const skillsets = [
    {skillName:'React' , imgLink:reactSvg , isFeatured:true},
    {skillName:'Python' , imgLink:pythonSvg, isFeatured:true},
    {skillName:'Django' , imgLink: djangoSvg , isFeatured:true},
    {skillName:'JavaScript' , imgLink:javaScriptSvg , isFeatured:true},
    {skillName:'TailWindCSS ' , imgLink:tailWindCssSvg, isFeatured:false},
    {skillName:'Front-End',imgLink: frontEndSvg, isFeatured:false},
    {skillName:'Back-End' , imgLink:backEndSvg , isFeatured:false},
    {skillName:'DataBase   ' , imgLink:dataBaseSvg, isFeatured:false},
    
];

export var featuredSkills = [];
featuredSkills = skillsets.filter((i) => i.isFeatured === true);
console.log(featuredSkills);