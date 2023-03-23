import React from 'react'

const Componente1 = () => {
  return (
    <div>
        <h2>Sono il componente 1</h2>
        <Anagrafica/>
        <Messaggio/>
    </div>
  )
}

const Anagrafica = () => {
    return (
        <h3 style={{'color': 'red'}}>Sono il componente anagrafica</h3>
    )
}

const Messaggio = () => {
    return (
        <p>Sono il componente messaggio</p>
    )
}
export default Componente1