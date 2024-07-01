import React from 'react'

function Weight({pokemons}) {
  return (
    <div className='d-flex flex-column align-items-start'>
    <h2>Weight:</h2>
    {
      <p>{pokemons.weight} kg</p>
    }
  </div>

  )
}

export default Weight