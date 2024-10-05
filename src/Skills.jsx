import './Skills.css';
import { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Skills(){

    useEffect(()=>{
        AOS.init({
            duration:700,
            delay:200,
            once:false,
        })
    },[])

  const slides = [
    { id: 1, src: './python.jpeg', alt: 'Python' },
    { id: 2, src: './js.jpg', alt: 'Javascript' },
    { id: 3, src: './java.png', alt: 'Java' },
    { id: 13, src: './c++.svg', alt: 'C++'},
    { id: 4, src: './html.png', alt: 'HTML' },
    { id: 5, src: './css.svg', alt: 'CSS' },
    { id: 6, src: './reactjs.png', alt: 'React JS' },
    { id: 7, src: './expressjs.png', alt: 'Express JS' },
    { id: 8, src: './MySQL.png', alt: 'MYSQL' },
    { id: 9, src: './mongodb.webp', alt: 'mongodb' },
    { id: 10, src: './tailwindcss.png', alt: 'tailwindcss' },
    { id: 11, src: './django.jpg', alt: 'Django' },
    { id: 12, src: './flask.jpg', alt: 'Flask' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
    return(
        <>
        <div className="bg-slate-800 p-2">
        <h1 className="text-center text-4xl text-white cf">Skills</h1>
        <div className="p-2 m-2 rounded-xl bg-black text-center">
            <img src={slides[currentSlide].src} className="block mx-auto p-2 m-2 w-8/12 sm:w-6/12 h-64 md:w-4/12 rounded-xl outline-2 outline-double outline-white outline-offset-4" alt={slides[currentSlide].alt} /><br />
            <div className="flex justify-evenly p-2 m-2">
                <button onClick={prevSlide} className="bg-red-500 text-white text-center p-3 border-2 border-white border-solid hover:opacity-50 rounded-xl font-mono">
                &#x2190; Prev
                </button>
                <button className="bg-green-500 text-white text-center p-3 rounded-xl border-2 border-white border-solid hover:opacity-50 font-mono" onClick={nextSlide}>
                    Next &#8594;
                </button>
            </div>
        </div>
        </div>
        </>
    )
}