import React, {useRef, useEffect, useState} from "react";

export default function Nav(){
    const [active, setActive] = useState(false);
    const myRef = useRef(null);

    useEffect(() => {
        function checkClick(e){
            if(myRef.current && !myRef.current.contains(e.target)){
                setActive(false);
            }
        }
        document.addEventListener("mousedown", checkClick);

        return () => {
            document.removeEventListener("mousedown", checkClick);
        }

    }, [myRef])

    const navClick = () => {
        setActive(!active);
    }

    return(
        <div className="smth">
            <nav ref={myRef} className="nav">
                <button onClick={() => navClick()}>{active ? <div></div> : <div></div>}</button>
                {active ? <div className="displayNav active"></div> : <div className="displayNav inactive"></div>}
            </nav>
        </div>
    )
}