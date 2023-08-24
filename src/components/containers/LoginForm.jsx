import React, { useState } from 'react'
import Bouton from '../ui/Bouton';

export default function LoginForm() {
const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");

const [mdp, setMdp] = useState("");
const [mdpError, setmdpError] = useState("");

const [voirMdp, setVoirMdp] = useState(false);
const [messageMdp, setMessageMdp] = useState("voir mdp");



function changeEmail(e)
{
    setEmail(e.target.value);
}


function changeMdp(e)
{
    setMdp(e.target.value);
}

function mdpVisible()
{
    setVoirMdp(!voirMdp);
    
    if(voirMdp)
    {
        setMessageMdp('cacher mdp')
    }else{
        setMessageMdp('voir mdp')

    }
}

function valideFormulaire()
{
    if(email.includes('@') && mdp.length >=6)
    {
        setEmail("");
        setMdp("");
        alert("votre email "+email+" et votre mdp "+mdp+" sont valide");
        return;
    }
    setEmailError(!email.includes('@') ? 'Email incorrect' : '');
    setmdpError(mdp.length < 6 ? 'Mot de passe trop court' : '');
}

    return (
    <div>
        <input type="email" onChange={changeEmail} placeholder='ecrivez votre email' value={email} />
        <p style={{color:'red',fontSize:'0.7em'}}>{emailError}</p>
        <input type={voirMdp ? "text" : "password"} onChange={changeMdp} placeholder='ecrivez votre mdp'/>
        <Bouton couleur="lightgreen" onClick={mdpVisible}>{messageMdp}</Bouton>        
        <p style={{color:'red',fontSize:'0.7em'}}>{mdpError}</p>

        <Bouton couleur="lightgreen"  onClick={valideFormulaire}>Validez</Bouton>
    </div>
  )
}
