import React from 'react';
import './App.css';
import pokemons from './data';

import Pokedex from './components/Pokedex';
import Button from './components/Button';

class App extends React.Component {
  constructor() {
    super()

    this.handlePokemon = this.handlePokemon.bind(this);
    this.state = {
      pokemonPosition: 0,
      arrayPokemon: pokemons
    }
  }

  handlePokemon() {
    if(this.state.pokemonPosition === pokemons.length - 1) 
      this.setState(() => ({pokemonPosition: 0}))
     else {
      this.setState((oldState) => ({
        pokemonPosition: oldState.pokemonPosition + 1
      }))
    }
  }

  filterPokemons(specificType) {
    const newArrayPokemon = specificType === 'All'
     ? pokemons 
     : pokemons.filter(({ type }) => specificType === type);
   
     this.setState(() => (
      { 
        arrayPokemon: newArrayPokemon,
        numberOfClicks: 0
      }
      ));
  }
  
  render () {
    const types = pokemons.reduce((array, { type }) => {
      if(array.includes(type)) return array
      else return array.concat(type)
    }, ['All']);

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.arrayPokemon} position={this.state.pokemonPosition}/>
        <div className='pokeContainer'>
          
          <button 
            onClick={this.handleClick}
            disabled={ this.state.numberOfClicks === this.state.arrayPokemon.length - 1}
            >
            Next
          </button>
         
          {types.map((type)=> (
              <Button 
              key={type} 
              onClick={() => this.filterPokemons(type)} 
              type={type}
              className={'pokeButao'}
              />
            ))}
         
          </div>
      </div>
    );
  }
}

export default App;