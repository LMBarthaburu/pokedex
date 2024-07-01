import { useEffect, useState } from 'react';
import './pokemon.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getPreviousPokemons, PokemonFilter, cleanFilter } from './Store/Slice/Thunks';
import PokemonLogo from './Assets/Img/ddrcbsj-16539b24-38a5-4d6d-aaf2-58e31d93cfbb.png'
import { MdArrowBackIosNew, MdArrowForwardIos  } from "react-icons/md";
import PokemonCries from './Componentes/Cries/Cries';
import Abilities from './Componentes/Abilities/Abilities';
import Types from './Componentes/Types/Types';
import Weight from './Componentes/Weight/Weight';
import Photos from './Componentes/Photos/Photos';
import Name from './Componentes/Name/Name';
import Img from './Componentes/Img/Img';



export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons );
  const [Encendido, setEnendido] = useState(true)
  const [Desplazamiento, setDesplazamiento] = useState(true)
  const [Desplazamiento2, setDesplazamiento2] = useState(true)
  const [value, setValue] = useState('')

  useEffect(() => {
    dispatch( getPokemons() );    
  }, [])// eslint-disable-line

  const encerderPokedex=()=>{
    setEnendido(!Encendido)
    setDesplazamiento(!Desplazamiento)
    setDesplazamiento2(!Desplazamiento2)
    dispatch(cleanFilter(1))
    setValue('')
  }
  const CSS = Encendido? 'ocultar':'mostrar'
  const Desp = Desplazamiento? 'desplazamiento' :''
  const Desp2 = Desplazamiento2? 'desplazamiento2' :''
  
  const handleValue = (e) => {
    setValue((e.target.value).toLowerCase());
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(PokemonFilter(value));
  }

  const handleReset=()=>{
    dispatch(cleanFilter(1))
    setValue('')
  }

  return (
    <div className='text-center p-relative'>
      <img src={PokemonLogo} alt="logo" className='my-2 logo'/>
        <div className='pokemon-container'>
          {
            <div className='info-container'>
              <div className={`img-container ${Desp}`}>
                <div className={`d-flex justify-content-center align-items-center transicion ${CSS}`}>
                  <div>
                    <button disabled={ isLoading || page===2} onClick={ () => dispatch( getPreviousPokemons(page) ) } className='flecha'>
                      <MdArrowBackIosNew />
                    </button>
                  </div>
                  <Img pokemons={pokemons}/>
                  <div>
                    <button  disabled={ isLoading }  onClick={ () => dispatch( getPokemons(page) ) } className='flecha' >
                      <MdArrowForwardIos/>
                    </button>
                  </div>
                </div>
              </div>
              <div className={`text-container ${Desp2}`}>
                {
                  Encendido?
                  <button onClick={encerderPokedex} className='boton apagado'></button>
                  :
                  <button onClick={encerderPokedex} className='boton encendido'></button>
                }
                <div className={`transicion ${CSS}`}>
                  <Name pokemons={pokemons}/>
                  <div className='text-position'>
                    <div className='d-flex justify-content-evenly align-items-start'>
                      <Abilities pokemons={pokemons}/>
                      <Types pokemons={pokemons}/>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-start'>
                      <Weight pokemons={pokemons}/>
                      <PokemonCries pokemons={pokemons}/>
                    </div>
                  </div>
                  <Photos pokemons={pokemons}/>
                  <form onSubmit={handleSearch} className='buscador'>
                      <input className='Buscador-input' type="text" value={value} onChange={handleValue} required/>
                      <div>
                        <button className='buscador-boton' type="submit">Search</button>
                        <button  className='buscador-boton' type='button' onClick={handleReset}>Restart</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          }
        </div>
    </div>
  )
}
