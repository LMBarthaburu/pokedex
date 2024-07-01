import React from 'react'

function Name({pokemons}) {
  return (
    <>
      { 
        pokemons.forms && pokemons.forms.map(({ name , url }) => {
          const pokemonId = url.split('/').slice(-2)[0];
          return (
            <div key={name}>
              <div className="">
                <h1 className='m-0 text-uppercase fw-bold'>#{pokemonId} {name}</h1>
              </div>
            </div>
          );
        })
      }
    </>
  )

}

export default Name