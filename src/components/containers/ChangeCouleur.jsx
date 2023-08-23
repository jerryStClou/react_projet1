import { useState } from "react"
import Bouton from "../ui/Bouton";

export default function ChangeCouleur() {
// variable d'état
const [couleur, setCouleur] = useState("green");

function couleurModif()
{
    if(couleur === "green")
    {
        setCouleur("red")
    }else{
        setCouleur("green")
    }
    // Operateur ternaire
    // setCouleur(couleur == "green" ? "red" : "green");
}

    return (
    <div>
       <h3>ChangeCouleur</h3>
       <Bouton couleur={couleur} onClick={couleurModif}>ChangeCouleur</Bouton> 
    </div>
  )
}
