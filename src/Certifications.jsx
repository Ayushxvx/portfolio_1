import { useState,useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Certifications(){

    useEffect(()=>{
        AOS.init({
            duration:700,
            delay:200,
            once:false,
        })
    },[])

  const slides = [
    { id: 1, src: './Certificate1.png', alt: 'Certificate' },
    { id: 2, src: './Certificate2.png', alt: 'Certificate' },
    { id: 3, src: './Certificate3.png', alt: 'Certificate' },
    { id: 4, src: './Certificate4.png', alt: 'Certificate' },
    { id: 5, src: './Certificate5.png', alt: 'Certificate' },
    { id: 6, src: './Certificate6.png', alt: 'Certificate' },
    { id: 7, src: './Certificate7.png', alt: 'Certificate' },
    { id: 8, src: './Certificate8.png', alt: 'Certificate' },
    { id: 9, src: './Certificate9.png', alt: 'Certificate' },
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
        <div className="bg-slate-800 p-2" id="certificates">
        <h1 className="text-center text-4xl text-white cf">Certificates</h1>
        <div className="p-2 m-2 rounded-xl bg-black text-center">
            <img src={slides[currentSlide].src} className="block mx-auto p-2 m-2 w-8/12 sm:w-6/12 md:w-4/12 rounded-xl outline-2 outline-double outline-white outline-offset-4" alt={slides[currentSlide].alt} /><br />
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