import React from 'react'

function Abilities({pokemons}) {
  return (
    <div className='d-flex flex-column align-items-start'>
    <h2>Abilities:</h2>
    {
      pokemons.abilities && pokemons.abilities.map(({ ability }) =>
        <li className='text-capitalize m-0'>{ability.name}</li>
      )  
    }
  </div>

  )
}

export default Abilities