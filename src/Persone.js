import React from 'react'

const Persone = (props) => {
  return (
    <div>
        {
        props.persone.map((persona) => {
            return <Persona name={persona.nome} cognome={persona.cognome} eta={persona.eta}></Persona>
        })
    }
    </div>
    
  )
}

const Persona = (props) => {
  return (
    <div>
        <ul>
            <li>{props.nome} {props.cognome} {props.eta}</li>
        </ul>
    </div>
  )
}


export default Persone