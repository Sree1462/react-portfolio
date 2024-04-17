import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import bashscripting from "../assets/certs/bashscripting.png"
import bootstrap from "../assets/certs/bootstrap.png"
import css from "../assets/certs/css.png"
import git from "../assets/certs/git.png"
import html  from "../assets/certs/html.png"
import  java from "../assets/certs/java.png"
import javascript from "../assets/certs/javascript.png"
import junit  from "../assets/certs/junit.png"
import reactjs from "../assets/certs/reactjs.png"
import spring from "../assets/certs/spring.png"
import sql from "../assets/certs/sql.png"
// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
            <CertCard name="Certified in Java Programming" img={java} issued="Codecademy" date="Feb 2024" />
                <CertCard name="Certified in Springboot" img={spring} issued="Codecademy" date="Feb  2024" />
                <CertCard name="Certified in Html " img={html} issued="Codecademy" date="Feb 2024" />
                <CertCard name="Certified in CSS " img={css} issued="Codecademy" date="Feb 2024" />
                <CertCard name="Certified in Javascript" img={javascript} issued="Codecademy" date="April  2024" />
                <CertCard name="Certified in Reactjs" img={reactjs} issued="Codecademy" date="April 2024" />
                <CertCard name="Certified in Bootstrap" img={bootstrap} issued="Codecademy" date="Mar 2024" />
                <CertCard name="Certified in Sql " img={sql} issued="Codecademy" date="April  2024" />
                <CertCard name="Certified in Junit " img={junit} issued="Codecademy" date="Feb 2024" />
                <CertCard name="Certified in Bashscripting" img={bashscripting} issued="Codecademy" date="Mar  2024" />
                <CertCard name="Certified in Git and GitHub" img={git} issued="Codecademy" date="Jan 2024" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
