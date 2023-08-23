import { useState } from "react"
import Bouton from "../ui/Bouton";

export default function Compteur() {
//   une variable d'état
const [compteur, setCompteur] = useState(0);

function incremente()
{
    setCompteur(compteur +1)
}
  function decremente()
  {
    setCompteur(compteur - 1)
  }
    return (
    <div>
        <h2>{compteur}</h2>
        <Bouton onClick={decremente} couleur='lightred'>-1</Bouton>
        <Bouton onClick={incremente} couleur='lightgreen'>+1</Bouton>

    </div>
  )
}
