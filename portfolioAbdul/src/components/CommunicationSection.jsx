import whatsAppSvg from '../assets/images/whatsAppSvg.svg';
import linkedInSvg from '../assets/images/linkedInSvg.svg';
import gitHubSvg from '../assets/images/gitHubSvg.svg';

const contactComponents = [
    {comName:'LinkedIn', imgLink: linkedInSvg , value:'open LinkedIn ->' , refer:'www.linkedin.com/in/abdul-haadhi-1223872b8'},
    {comName:'gitHub', imgLink:gitHubSvg , value:'open GitHub ->' , refer :'https://github.com/tecrcopentgit'},
    {comName:'whatsApp', imgLink:whatsAppSvg , value:'+91 8807308481', refer:'+91 8807308481'}
]

function goToGoogle({link}) {
    useEffect(() => {
      window.location.href = link;
    }, []);
  
    return <p>Redirecting...</p>;
  }
  

export default function CommunicationSection(){
return(
    <>
    
    <div className=' bg-black/30 w-screen py-15 lg:p-10 'id='Contact'>
    <h1>Available in..</h1>
    <div className='flex justify-center'>
<ul className='flex  lg:gap-40 mt-10'>
    {contactComponents.map((comp , i) =>(<li key={i}>
<img src={comp.imgLink}   className='h-5 w-5 lg:h-40 lg:w-40 mx-15'/> 
<h3>{comp.comName}</h3> 
<button>{comp.value}</button>


    </li>) )}
</ul>
    </div>

    </div>
    </>)
}