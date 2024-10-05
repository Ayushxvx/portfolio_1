import './Navbar.css';
import { useEffect, useState } from "react";
import AOS from 'aos'; 
import 'aos/dist/aos.css';

function Navbar(){

    useEffect(()=>{
        AOS.init({
            delay:200,
            duration:500,
            once:false
        })
    },[]);

    const [nav,setNav] = useState(false);
    return(
        <nav className="text-right sm:flex justify-evenly bg-slate-800 text-gray-400">
            <div className="inline-block sm:hidden text-2xl p-2 rounded-lg cursor-pointer transition-nav" onClick={()=>setNav(!nav)}>
            {nav?
              <span className="text-sm">❌</span>
            :
            <span>&equiv;</span>
          } 
            </div>
            {nav?
            <div className="transition-all sm:hidden ">
                <div data-aos="fade-left" data-aos-delay="1000" className='cursor-pointer hover:text-white p-2 m-1 lani inline-block'><a href="/">Home</a></div><br />
                <div data-aos="fade-left" data-aos-delay="1000" className='cursor-pointer hover:text-white p-2 m-1 lani inline-block'><a href="#about">About</a></div><br />
                <div data-aos="fade-left" data-aos-delay="1000" className='cursor-pointer hover:text-white p-2 m-1 lani inline-block'><a href="#projects">Projects</a></div><br />
                <div data-aos="fade-left" data-aos-delay="1000" className='cursor-pointer hover:text-white p-2 m-1 lani inline-block'><a href="#certificates">Certificates</a></div><br />
                <div data-aos="fade-left" data-aos-delay="1000" className='cursor-pointer hover:text-white p-2 m-1 lani inline-block'><a href="#contact">Contact</a></div><br />
            </div>:
            <div></div>}
            <div data-aos="fade-down" data-aos-delay="1000" className="hidden sm:inline-block p-2 hover:text-white cursor-pointer lani m-2">
                <a href="/">Home</a>
            </div>
            <div data-aos="fade-down" data-aos-delay="1000" className="hidden sm:inline-block p-2 hover:text-white cursor-pointer lani m-2">
                <a href="#about">About</a>
            </div>
            <div data-aos="fade-down" data-aos-delay="1000" className="hidden sm:inline-block p-2 hover:text-white cursor-pointer lani m-2">
                <a href="#projects">Projects</a>
            </div>
            <div data-aos="fade-down" data-aos-delay="1000" className="hidden sm:inline-block p-2 hover:text-white cursor-pointer lani m-2">
                <a href="#certificates">Certificates</a>
            </div>
            <div data-aos="fade-down" data-aos-delay="1000" className="hidden sm:inline-block p-2 hover:text-white cursor-pointer lani m-2">
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;