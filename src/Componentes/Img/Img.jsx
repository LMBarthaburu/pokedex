import React from 'react'

function Img({pokemons}) {
  return (
    <>
    { 
      pokemons.forms && pokemons.forms.map(({ name , url }) => {
        const pokemonId = url.split('/').slice(-2)[0];
        return (
          <div key={name}>
            <img class="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={name}/>
          </div>
        );
      })
    }
  </>
  )
}

export default Img