import React, { useEffect, useState } from 'react'

export default function GOT() {
    const [personnages, setPersonnages] = useState([])
    // Fonction qui permet d'aller récuperer les données des personnages depuis l'api
    async function getPersonnages(){
        // Envoyer une requette HTTP et stocker la réponse dans une constante
        const reponse = await fetch("https://thronesapi.com/api/v2/Characters");
        // Transformer les données reçu en objet Javascript
        const data = await reponse.json();
        // stoker la liste des personnages dans la variable d'état
        setPersonnages(data);

        // useEffect permet d'executer des fonctions asynchrone quand le composant et mis dans le DOM
        useEffect(() => {
            getPersonnages();
        }, []);
    }
    return (
    <div>
        {personnages.map((personnages)=>{
            return(<div key={personnages.id}>
                <h2>{personnages.fullName}</h2>
                <img src={personnages.imageUrl}/>
                <p>{personnages.title}</p>
                </div>)
        })}
    </div>
  )
}
