import React, {useState} from "react";
import { FaList,  FaTimes } from "react-icons/fa";

export default function Nav(){
    const [active, setActive] = useState(false);

    const navClick = () => {
        setActive(!active);
    }
    console.log(active);
    return(
        <nav className="nav" onClick={() => navClick()}>
            <button>{active ? <FaTimes className="falist"/> : <FaList className="falist"/>}</button>
            {active ? <div className="displayNav active"></div> : <div className="displayNav inactive"></div>}
        </nav>
    )
}