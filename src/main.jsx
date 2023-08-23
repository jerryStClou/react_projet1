import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

let prenom = "Jerry";

function Bouton(objet)
{
  // return <button style={{backgroundColor: objet.couleur}}>{objet.label}</button>
  return <button style={{backgroundColor: objet.couleur}}>{objet.children}</button>

}


function Champ(objet)
{
  return <input type={objet.type} placeholder={objet.holder}></input>
}


// Exercice:
// Créer un composant nommé Titre qui reçcoit en paramètre children et taille.

function Titre(props)
{
     return <h1 style={{fontSize:props.taille}}>{props.children}</h1>
}

// Utiliser children pour affiche le contenu du titre et la taille pour change la taille du titre (fontSize)
// Utilser le Titre dans l'application

ReactDOM.createRoot(document.getElementById('root')).render(
<div> 
  {/* <h1>Salut {prenom}</h1> */}
  {/* {bouton({couleur: "green", label: "Ajouter"})} */}
  {/* {bouton({couleur: "red", label: "Supprimer"})} */}
  {/* <Champ type="text" holder="Ecrivez votre nom"></Champ> */}
  {/* <Bouton couleur="green">Ajouter</Bouton> */}
{/* <Titre taille="19px">Titre 1</Titre> */}
<App/>

 </div> 

  )
