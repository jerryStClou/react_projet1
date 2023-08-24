import { useState } from "react";
import fleche from '../../assets/images/arrow.svg';
export default function Accordion({titre, contenu})
{
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen()
    {
        setIsOpen(!isOpen);
    }
    return(
        <div>
            <div style={{position: "relative"}}>
                <h2>{titre}</h2>
                <img 
                onClick={toggleOpen}
                src={fleche} 
                style={{width:'30px',
                position:"absolute",
                top:"0",
                right:"0", 
                rotate: isOpen ? "180deg" : "0deg"}}/>
            </div>
               <p style={{display: isOpen ? "block" : "none"}}>{contenu}</p>
        </div>
    );
}