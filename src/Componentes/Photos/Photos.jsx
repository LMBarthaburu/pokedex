import React from 'react'

function Photos({pokemons}) {
  return (
    <div className='d-flex justify-content-center align-items-start imagenes mt-2'>
    {
      pokemons.sprites && (
          <>
            {pokemons.sprites.front_default &&
              <img src={pokemons.sprites.front_default} alt="Front img" />              
            }
            {pokemons.sprites.back_default &&
              <img src={pokemons.sprites.back_default} alt="Back img" />
            }
            {pokemons.sprites.front_shiny && 
              <img src={pokemons.sprites.front_shiny} alt="Shiny front" />
            }
            {pokemons.sprites.back_shiny &&
              <img src={pokemons.sprites.back_shiny} alt="Shiny back" />
            }
          </>
      )  
    }
  </div>
  )
}

export default Photos