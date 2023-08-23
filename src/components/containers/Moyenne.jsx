import React  from "react" ;



export default function Moyenne({nombres})
{
    function calculMoyenne(){
        let somme = 0;
        for(let i=0; i< nombres.length;i++){
            somme += nombres[i];
        }
        return somme/nombres.length;
    }
 
    return(
        <div>
            <h2>Votre moyenne est de {calculMoyenne()}</h2>
            <ul>
                {nombres.map((nombre) =>{
                    return <li style={{ color: nombre <10 ? "red" : "green" }}>{nombre}</li>
                })}
            </ul>
            </div>
    );
}
