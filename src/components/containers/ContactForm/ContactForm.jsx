import Bouton from "../../ui/Bouton";
import Input from "../../ui/Input";
import classes from "./ContactForm.module.css";
export default function ContactForm()
{
     return(
         <div className={classes.container}>
            <Input type="email" holder="entrez votre email"></Input>
            <Input type="text" holder="entrez votre nom et prenom"></Input>
            <Input holder="Ecrivez votre message" textArea={true}></Input>
            <Bouton couleur="lightblue">Envoyer</Bouton>
         </div>
     )
}