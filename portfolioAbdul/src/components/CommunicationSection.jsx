import whatsAppSvg from '../assets/images/whatsAppSvg.svg';
import linkedInSvg from '../assets/images/linkedInSvg.svg';
import gitHubSvg from '../assets/images/gitHubSvg.svg';

const contactComponents = [
    {comName:'LinkedIn', imgLink: linkedInSvg , refer:'https://www.linkedin.com/in/abdul-haadhi-1223872b8/'},
    {comName:'gitHub', imgLink:gitHubSvg ,  refer :'https://github.com/tecrcopentgit'},
    {comName:'whatsApp', imgLink:whatsAppSvg ,  refer:'https://wa.me/918807308481?text=Hi%20there...%20This%20is%20Abdul%20Haadhi?..'}
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
    {contactComponents.map((comp , i) =>(
        <a href={comp.refer} key={i}>
    <li key={i}>
<img src={comp.imgLink}   className='h-5 w-5 lg:h-40 lg:w-40 mx-15'/> 
<h3>{comp.comName}</h3> 



    </li> </a>) )}
</ul>
    </div>

    </div>
    </>)
}