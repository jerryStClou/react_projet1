export default function Input({type,holder,textArea}){
// return <input type={type} placeholder={holder}/>
return <>
    {
        textArea ? (<textarea placeholder={holder}></textarea>) : (
            <input type={type} placeholder={holder} />
        )
    }
</>
}