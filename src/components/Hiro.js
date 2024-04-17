// import {useState} from 'react'

// import Myself from '../assets/skills/Myself.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
// import {  faGithub,  faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import hr from '../assets/curve-hr.svg'

// export default function Hiro () {

//     const [loaded, setLoaded] = useState(true);

//     return (
//         <>
//         {loaded ?
//         <div
//             className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
//         >Loading...</div>
//             :
//             null
//         }
//         <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
//             <div className='md:w-3/6 md:p-4'>
//                 <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={Myself} alt="profile" onLoad={() => setLoaded(false)} />
//             </div>
//             <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
//                 <div className="flex flex-col w-full mt-8">
//                     <h1 className="text-xl text-gray-400">Hi, I'm</h1>
//                     <h1 className="text-2xl font-bold">Sreevani Arani</h1>
//                     <p class="text-xl font-bold text-gray-300">Full Stcak Developer</p>
//                     <p className="text-md font-light text-gray-400 ">As a passionate self-taught Full Stack Developer from India, I focus on crafting robust and responsive websites that ensure an inclusive user experience. Eager to explore the intricacies of scalable systems and dedicated to problem-solving, I prioritize clean, maintainable code. My approach to responsive design not only enhances accessibility but also connects a diverse range of users to modern digital solutions.</p>
//                 </div>
        
                
//                 <ul className='flex mt-2 gap-4 items-center'>
//                    <li>
//                         <a href='https://github.com/Sree1462' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
//                    </li> 
//                     <li>
//                         <a href='https://www.linkedin.com/in/sreevani-arani-9623b0266/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
//                     </li>
//                 </ul>
//             </div>
//             <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
//         </div>
//         </>
//     )
// }

import { useState } from 'react';
import Myself from '../assets/skills/Myself.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg';

export default function Hiro () {
    const [loaded, setLoaded] = useState(true);

    return (
        <>
         <style>
            {`
                @keyframes slideRight {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .sliding {
                    animation: slideRight 100s ease-out forwards;
                }
            `}
        </style>
        {loaded ?
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
                Loading...
            </div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" className="rotating" src={Myself} alt="profile" onLoad={() => setLoaded(false)}  style={{ borderRadius: '20px',width: '350px', height: 'auto' }}/>
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Sreevani Arani</h1>
                    <p className="text-xl font-bold text-gray-300">Full Stack Developer</p>
                    <p className="text-md font-light text-gray-400">As a passionate self-taught Full Stack Developer from India, I focus on crafting robust and responsive websites that ensure an inclusive user experience. Eager to explore the intricacies of scalable systems and dedicated to problem-solving, I prioritize clean, maintainable code. My approach to responsive design not only enhances accessibility but also connects a diverse range of users to modern digital solutions.</p>
                </div>
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/Sree1462' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://www.linkedin.com/in/sreevani-arani-9623b0266/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    );
}
