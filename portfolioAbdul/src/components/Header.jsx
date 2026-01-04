import {useEffect , useState , useRef } from 'react';

import menuBarSvg from '../assets/img2/menuBarSvg.svg';

export default function Header(){


    const headerRef = useRef(null);
    const [headerFixed , setHeaderFixed ] = useState(false);
    const [mobile , setMobile] = useState('hidden');
    const [ menuEventer , setMenuEventer ] = useState(<img className='h-6' src={menuBarSvg} />)
    const [menuStyle , setMenuStyle ] = useState('bg-amber-900/30 p-2 w-10 rounded-full mt-1 mx-38')
    
    const headerClick = () => {
    

        if (mobile ===  'hidden'){
            setMobile('block')
            setMenuStyle('bg-red-900 p-2 w-10 rounded-full mt-1 bg-cover')
            setMenuEventer('X')
        }
        else{
            setMobile('hidden')
            console.log('close')
            setMenuEventer(<img className='h-6' src={menuBarSvg} />)
            setMenuStyle('bg-amber-900/30 p-2 w-10 rounded-full mt-1 mx-38 slide-down')
            
        }
    }

    useEffect(() => {
       const handleScroll = () => {
        if (headerRef.current){
        const headerBottom = 
        headerRef.current.offsetTop + headerRef.current.offsetHeight;

        setHeaderFixed( window.scrollY >= headerBottom);
}  
       };

       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll' , handleScroll);
    } , [])


    const headerContent = ['Profile' , 'Projects', 'Technical-Skills' , 'Contact'];

    const sectionClick = (id) => {
        document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
    }

    return (

        <>
        <div className={`${headerFixed ? "fixed  " : "relative"} bg-gradient-to-tl from-amber-800/40 to-purple-950/50 p-5 w-full slide-down   hidden md:block`} ref={headerRef}>
           <ul className='justify-center flex flex-row gap-10'>
            {headerContent.map((item , i) => ( 
                <li key= {i} ><button onClick={() => {sectionClick(item)}}>{item}</button></li>
            ))}
           </ul>
            
        </div>
        <div className={`${headerFixed ? "fixed  " : "relative"} top-0 fixed-0  block md:hidden`}>
            
            <div className={`${mobile} bg-red-900/40 `}> <ul className='flex flex-row justify-end gap-5 p-5 ' ref={headerRef}>
                {headerContent.map((i) => (<li key={i}> <button onClick={() => {sectionClick(i)}}>{i}</button></li>
            ))}</ul></div>
            <ul className=''>
              <button className={`${menuStyle} hover:text-red-800 relative left-40`} onClick={headerClick}>{menuEventer}</button>
            </ul>
        </div>
        
        </>

    )
}