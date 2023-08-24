import React, { useState } from 'react'

export default function NombrePaire() {
const [inputNombre, setInputNombre] = useState(0);

function handleChange(e)
{
    setInputNombre(e.target.value);
}
    return (
    <div>
        <input onChange={handleChange} placeholder='Entrez un nombre' />
        <p>{inputNombre % 2 === 0 ? 'Nombre pair' : 'Nombre impair'}</p>
    </div>
  )
}
