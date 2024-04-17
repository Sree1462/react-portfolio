import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import bootstrap from "../assets/skills/bootstrap.svg"
import css from "../assets/skills/css.svg"
import html from "../assets/skills/html.svg"
import java  from "../assets/skills/java.svg"
import mysql  from "../assets/skills/mysql.svg"
import react from "../assets/skills/react.svg"
import spring from "../assets/skills/spring.svg"
import git from "../assets/skills/git.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="bootstrap"  img={bootstrap} />
                <SkillCard name="bash"  img={bash} />
                <SkillCard name="java"  img={java} />
                <SkillCard name="javascript"  img={javascript} />
                <SkillCard name="react"  img={react} />
                <SkillCard name="css"  img={css} />
                <SkillCard name="html"  img={html} />
                <SkillCard name="mysql"  img={mysql} />
                <SkillCard name="spring"  img={spring} />
                <SkillCard name="git"  img={git} />
                <SkillCard name="gitlab"  img={gitlab} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}