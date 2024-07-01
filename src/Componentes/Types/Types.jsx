import React from 'react'

function Types({pokemons}) {
  return (
    <div className='d-flex flex-column align-items-start'>
    <h2>Types:</h2>
    {
      pokemons.types && pokemons.types.map(({ type }) =>
        <li className='text-capitalize m-0'>{type.name}</li>
      )  
    }
  </div>  

  )
}

export default Types