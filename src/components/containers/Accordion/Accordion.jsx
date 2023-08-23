import classes from "./Accordion.module.css";
export default function Accordion({titre, contenu})
{
    return(
        <div className={classes.Accordion}>
            <div className={classes.titreAccordion}>
                <h1>{titre}</h1>
                <button>appuyer</button>
            </div>
            <p>{contenu}</p>
            
        </div>
    );
}