import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import './Skills.css';

export default function Projects(){

    useEffect(()=>{
        AOS.init({
            duration:700,
            delay:200,
            once:false
        })
    },[])

    return(
        <>
        <div className='bg-black m-2 rounded-xl'>
        <h1 id="projects" className="text-center text-white cf text-4xl">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[#E0E0E0] p-2 m-2 gap-6">

<div data-aos="fade-up" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2 mx-auto">
        <img class="rounded-t-lg" src="./project6.png.png" alt="Youtube Clone" />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Youtube Clone</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a full stack youtube clone with authentication and many more features including like , dislike and comments.</p>
        <a target="_blank" href="https://vayush.pythonanywhere.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
            
<div data-aos="fade-up" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2 mx-auto">
        <img class="rounded-t-lg" src="./project1.png" alt="Mystic Forum Project" />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mystic Forum</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a full stack web application with authentication and many more features including like , dislike and comments.</p>
        <a target="_blank" href="https://ayushv2003.pythonanywhere.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div data-aos="fade-up" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2 mx-auto">
        <img class="rounded-t-lg" src="./project2.png" alt="Post App Project" />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Post App using MERN</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a full stack web application made in MERN stack that allows user to add posts.</p>
        <a target="_blank" href="https://postusingmern.netlify.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div data-aos="fade-up" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2 mx-auto">
        <img class="rounded-t-lg" src="./project3.png" alt="INote Project" />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Inote App</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a full frontend Inote App where users can add and remove notes.</p>
        <a target="_blank" href="https://subtle-panda-d10d46.netlify.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div data-aos="fade-up" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2 mx-auto">
        <img class="rounded-t-lg" src="./project4.png" alt="Post App Project" />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calculator</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is a fully functional calculator.</p>
        <a target="_blank" href="https://ayushxvx.github.io/Calculator/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


<div data-aos="fade-up" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 m-2 mx-auto">
        <img class="rounded-t-lg" src="./project5.png" alt="Post App Project" />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tic Tac Toe</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A fun Tic Tac Toe game to play with your friend.</p>
        <a target="_blank" href="https://ayushxvx.github.io/TicTacToe/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
        </div>
        </div>
        </>
    )
}
