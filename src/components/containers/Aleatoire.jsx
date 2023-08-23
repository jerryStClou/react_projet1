import { useState } from "react";
import Bouton from "../ui/Bouton";

export default function Aleatoire()
{
// variable d'état
const [nbr, setNbr] = useState(0);

function NbrAleatoire()
{
    let min=0; 
let max=10;  
let random = Math.floor(Math.random() * (max - min)) + min; 
setNbr(random);
}

const blaguesInformatiques = [
    "Pourquoi les développeurs détestent-ils la nature ? Parce qu'elle a trop de bugs.",
    "Pourquoi les programmeurs préfèrent-ils les plages ? Parce que le sable a moins de bugs que le code.",
    "Combien de programmeurs faut-il pour changer une ampoule ? Aucun, c'est un problème matériel.",
    "Pourquoi les développeurs détestent-ils Noël ? Parce qu'ils n'ont pas de vie privée.",
    "Quelle est la boisson préférée des développeurs ? Le Java !",
    "Pourquoi les programmeurs confondent-ils Noël et Halloween ? Parce que Oct 31 == Dec 25 (en binaire).",
    "Comment appelle-t-on un développeur qui ne cesse de se plaindre ? Un développeur JavaScript.",
    "Pourquoi les développeurs web sont-ils de bons jardiniers ? Parce qu'ils sont experts en plantation de divs.",
    "Comment fait un développeur pour se tenir en forme ? Il lève des poids binaires.",
    "Pourquoi les programmeurs détestent-ils l'été ? Parce que la plage n'a pas de Wi-Fi."
  ];

return (
    <div>
       <h3>{nbr}</h3>
    <h4>{blaguesInformatiques[nbr]}</h4>
       <Bouton couleur="lightgreen" onClick={NbrAleatoire}>nombre aleatoire</Bouton> 
    </div>
  )
} 
