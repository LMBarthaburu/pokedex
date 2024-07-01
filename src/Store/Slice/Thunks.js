import { pokemonApi } from '../../Api/PokemonApi';
import { setPokemonsNext, startLoadingPokemons, setPokemonsPrevious, findPokemon, cleanPokemon } from './PokemonSlice';



export const getPokemons = ( page = 1 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`/pokemon/${ page * 1 }`);

        dispatch( setPokemonsNext({ pokemons: data , page: page + 1 }) );
    }
}

export const getPreviousPokemons = ( page ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`/pokemon/${ (page - 2) * 1 }`);

        dispatch(setPokemonsPrevious({pokemons: data , page: page - 1}))

    }
}

export const PokemonFilter = (value) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        try {
            const { data } = await pokemonApi.get(`/pokemon/${value}`);
            dispatch(findPokemon({ pokemons: data, page: data.id + 1 }));
        } catch (error) {
            if (error.response.status === 404) {
                alert('No se encontró ningún Pokémon. Inténtalo de nuevo.');
                return
            }
        }
    }
}

export const cleanFilter =(page)=>{
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`/pokemon/${ page * 1 }`);

        dispatch( cleanPokemon({ pokemons: data , page: page + 1 }) );

    }
}



