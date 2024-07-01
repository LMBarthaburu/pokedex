import React, { useRef } from 'react';
import { AiFillSound } from "react-icons/ai";

const PokemonCries = ({ pokemons }) => {
  const latestAudioRef = useRef(null);
  const legacyAudioRef = useRef(null);

  const playAudio = (audioRef) => {
    audioRef.current.play();
  };

  return (
    <div className='d-flex flex-column align-items-start'>
      <h2>Cries:</h2>
      {
        pokemons.cries && (
          <div>
            <button className='cries-button' onClick={() => playAudio(latestAudioRef)}><AiFillSound /></button>
            <audio ref={latestAudioRef} src={pokemons.cries.latest}></audio>
            <br />
            <button className='cries-button' onClick={() => playAudio(legacyAudioRef)}><AiFillSound /></button>
            <audio ref={legacyAudioRef} src={pokemons.cries.legacy}></audio>
          </div>
        )  
      }
    </div>
  );
};

export default PokemonCries;