import Bouton from "../ui/Bouton";





export default function Routine ()
{
    
    function alertMoi(message)
    {
       alert(message);
    }
    return(
        <div>

        <Bouton couleur="lightblue" onClick={()=>{alertMoi('Aller manger')}}>Manger</Bouton>
        <Bouton couleur="lightgreen" onClick={()=>{alertMoi('Aller dormir')}}>Dormir</Bouton>
        
        <Bouton couleur="lightgrey" onClick={()=>{alertMoi('Aller etudier')}}>Etudier</Bouton>
        </div>
    );
}