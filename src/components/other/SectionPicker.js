import { useEffect, useState } from 'react'

const arr = [
    {
        section: 1,
        name: "Intro",
        active: true,
    },
    {
        section: 2,
        name: "About",
        active: true,
    },
    {
        section: 3,
        name: "Knowledge",
        active: true,
    },
    {
        section: 4,
        name: "Projects",
        active: false,
    },
    {
        section: 5,
        name: "Contact",
        active: false,
    }
];


export default function SectionPicker(){
    const [scroll, setScroll] = useState(0);
    const [section, setSection] = useState(1);

    function useScroll(){
        let curr = window.scrollY;
        let next = document.querySelector("#section-" + section);
        let nextPos = Math.ceil(next.getBoundingClientRect().top + (document.documentElement.scrollTop - document.documentElement.clientHeight));
        let max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if(curr === nextPos){
            setSection(section);
        }
        setScroll(Math.round((curr / max * 100) / (5 - section)))
    }

    useEffect(() => {
        setScroll(window.addEventListener("scroll", useScroll));

        return () => {
            window.removeEventListener("scroll", useScroll);
        }

    }, [scroll])

    return(
        <nav className="mn-navbar">
            <div className="ball-holder">
                {arr.map((index) => {
                    return (
                        <div key={index.name} className={index.active ? "ball active" : "ball inactive"}>
                            <div className="nr">{index.section}</div>
                            <div className="section"><span>{index.name}</span></div>
                        </div>
                    )
                })}
            </div>
            <div style={{"height" : scroll + "%"}} className="line highlight-line"></div>
            <div className="line backdrop-line"></div>
        </nav>
    )
}