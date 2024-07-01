import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemonsNext: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
        setPokemonsPrevious: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
        findPokemon:(state, action)=>{
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons= action.payload.pokemons;
        },
        cleanPokemon:(state, action)=>{
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons= action.payload.pokemons;
        }
    }
});


export const { startLoadingPokemons, setPokemonsNext, setPokemonsPrevious, findPokemon, cleanPokemon } = pokemonSlice.actions;