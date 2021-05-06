import React from 'react';

import Pokemon from './Pokemon';

import pokemons from '../libs/data';

class Pokedex extends React.Component {
    render() {
        return (
            <div>
                {pokemons.map(pokemon => <Pokemon pokemon={pokemon}/>)}
            </div>
        )
    }
}

export default Pokedex;