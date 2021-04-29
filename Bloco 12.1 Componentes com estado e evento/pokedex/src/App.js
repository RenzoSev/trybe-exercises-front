import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super()

    this.handlePokemon = this.handlePokemon.bind(this);
    this.state = {
      pokemonPosition: 0,
    }
  }

  handlePokemon() {
    if(this.state.pokemonPosition === pokemons.length - 1) {
      this.setState((oldState, _props) => ({pokemonPosition: 0}))
    }else {
      this.setState((oldState, _props) => ({
        pokemonPosition: oldState.pokemonPosition + 1
      }))
    }
  }
  
  render () {
    console.log(this.state.pokemonPosition);
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} position={this.state.pokemonPosition}/>
        <button onClick={this.handlePokemon}>Next</button>
      </div>
    );
  }
}

export default App;