import React from "react";

import BgSprite from "../components/other/BgSprite";
import HeroText from "../components/HeroText";
import SectionPicker from "../components/other/SectionPicker";
import About from "../components/sections/about/About";

export default function Home(){

    return(
        <div>
            <HeroText />
            <BgSprite />
            <SectionPicker />
            <About />
        </div>
    )
}