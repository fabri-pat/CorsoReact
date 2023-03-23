import React, { useState } from 'react'

const Hidden = () => {
    const[show, setShow]=useState(false);

  return (
    <div>
        <h1>Hidden</h1>
        <button onClick={() => setShow(!show)}>
            {show ? "Nascondi" : "Visualizza"}
        </button>
        {show && <Elemento></Elemento>}
    </div>
  )
}

const Elemento = () => {
    return (
        <div>Elemento</div>
    )
}

export default Hidden