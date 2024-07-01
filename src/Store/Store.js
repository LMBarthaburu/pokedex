import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './Slice/PokemonSlice';

export const store = configureStore({
  reducer: {
      pokemons: pokemonSlice.reducer,
  },
})