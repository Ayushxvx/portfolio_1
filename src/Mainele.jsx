import { ReactTyped } from "react-typed";
import './Mainele.css';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Mainele(){
  
  useEffect(()=>{
    AOS.init({
      delay:200,
      duration:400,
      once:false
    })
  },[]);

    return(
        <main id="about" className="bg-gradient-to-r from-blue-950 to-slate-700 text-white p-3 grid grid-cols-1 md:grid-cols-2 items-center">
           <div className="p-2 inline-block text-center">
           <h2 data-aos="fade-right" className="p-2 m-2 block text-center">Hello, I am</h2>
           <h1 data-aos="fade-left" className="text-5xl font-extrabold p-2 m-2 text-center">Ayush Verma</h1>
           <div className="font-mono text-4xl p-2 m-2 text-center">
            I am a&nbsp;
            <span className="text-xl text-green-400">
            <ReactTyped
      strings={[
        "Aspiring Software Developer",
        "Full-Stack Web Developer",
        "Frontend Developer (React, Tailwind CSS)",
        "Backend Developer (Node.js, Django, Flask)",
        "JavaScript Enthusiast",
        "MERN Stack Developer",
        "Python Developer",
        "Golang Programmer",
        "C++ and Java Developer",
        "Rust Developer",
        "UI/UX Designer with a Focus on Usability",
        "Passionate about Open Source Contribution",
        "Tech Enthusiast Exploring Emerging Technologies",
        "Problem Solver and Algorithm Designer",
        "Collaborative Team Player with Strong Communication Skills"
      ]}
      
      typeSpeed={40}
      backSpeed={50}
      loop
    />
            </span>
           </div>
           </div>
           <div className="p-2">
                <img src="./mainEleImg.avif" alt="Anime img" className="outline-2 outline-offset-4 outline-double outline-white rounded-full w-8/12 block mx-auto imgani"/>
           </div>
        </main>
    )
}