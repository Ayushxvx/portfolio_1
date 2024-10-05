import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Skills.css';
export default function Contact(){
    return(
        <>
    <div id="contact" className="bg-black text-[#32CD32] font-mono grid grid-cols-1 p-2 m-2 font-bold rounded-xl">
        <h1 className="text-center text-white cf text-4xl">Contact Info</h1>
        <div className="p-2 m-2 mx-auto">
            <h1 className="text-center underline-offset-4 underline">My Socials</h1><br />
            <div className="flex justify-evenly p-2 m-2">
            <span className="p-2 m-2 border-2 border-solid border-white cursor-pointer rounded-2xl hover:text-white hover:bg-black">
                <a href="https://github.com/Ayushxvx" target="_blank">
                <h3 className="text-center">
                Github &nbsp; <FaGithub className="inline-block"/>
                </h3>
                </a>
            </span>
            <span className="p-2 m-2 border-2 border-solid border-white cursor-pointer rounded-2xl hover:text-white hover:bg-black">
                <a href="https://www.linkedin.com/in/ayush-verma-a31050293" target="_blank">
                <h3 className="text-center">
                Linkedin &nbsp; <FaLinkedin className="inline-block"/>
                </h3>
                </a>
            </span>
            </div>
        </div>
        <div className="p-2 m-2 font-bold font-mono text-xl">
        <h1 className="text-center">
            Education:
        </h1>
        <h2 className="text-center">
            Bachelor Of Technology
        </h2>
        <h3 className="text-center">
        Baderia Global Institute of Management and Engineering <br />
        2021 - 25 | Jabalpur, India <br />
        • CGPA- 8.60(till date) <br />
        • Course- B Tech in Computer Science & Engineering <br />
        </h3>
        </div>
    </div>
        </>
    )
}