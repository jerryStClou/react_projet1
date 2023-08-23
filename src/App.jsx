import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bouton from './components/ui/Bouton'
import { Header } from './components/containers/Header'
import { Footer } from './components/containers/Footer'
import ContactForm from './components/containers/ContactForm/ContactForm'
import Moyenne from './components/containers/Moyenne'
import Todos from './components/containers/Todos'
import Routine from './components/containers/Routine'
import Compteur from './components/containers/Compteur'
const taches = [
  {
      title: "Aller manger",
      content: "Je dois aller manger au mcDo",
      isDone: true,
  },
  {
      title: "Aller Etudier",
      content: "Je dois aller etudier React",
      isDone: true,
  },
  {
      title: "Aller Dormir",
      content: "Je dois aller dormir",
      isDone: true,
  },
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Vite + React</h1> */}
      {/* <Bouton couleur="royalblue">Contactez-nous</Bouton> */}
      {/* {Header({children:"titre1", image:"", nomBouton:"Valider", paragraphe:"para3"})} */}
      {/* <Header></Header> */}
      <Moyenne nombres={[12,8,15,19]}/>
      <ContactForm/>
      <Todos tasks={taches}/>
      <Routine/>
      <Compteur/>
      {/* <Footer></Footer> */}


    </>
  )
}

export default App
