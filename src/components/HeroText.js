import React, { useEffect, useState } from "react";

let text = [
    "My name is Mahatti Nilssaun!",
    "My name is",
    "My name is Matti Nilsson, and I like dogs...",
    "My name is Matti Nilsson,",
    "My name is Matti Nilsson, and I am a Frontend Developer!"
];

export default function HeroText(){
    const [index, setIndex] = useState(0);
    const [line, setLine] = useState(0);
    const [lineToRead, setLineToRead] = useState(text[0].split(""));
    const [myText, setText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            if(index === lineToRead.length){
                setLine(line + 1);
                setLineToRead(text[line].split(""))
                setIndex(index + 1);
            }
            if(index <= lineToRead.length){
                setText(myText + lineToRead[index]);
                setIndex(index + 1);
            }
            if(index >= lineToRead.length){
                setText(myText.slice(0, -1));
                setIndex(index - 1);
            }
        }, 50)
        if(index === lineToRead.length && text.length === line) clearInterval(interval);
        return () => clearInterval(interval);
    }, [index, line])

    return(
        <>
            <div className="hero">
                <h1>Welcome!</h1>
                <div className="type-writer">
                    <div><p>{myText}</p></div><div className="line"></div>
                </div>
            </div>
        </>
    )
}