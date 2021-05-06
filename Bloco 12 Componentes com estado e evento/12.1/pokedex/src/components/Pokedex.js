import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const pokemon = this.props.pokemons[this.props.position]

        return (
            <div className="pokedex">
                <Pokemon key={pokemon.id} pokemon={pokemon}/>
            </div>
        );
    }
}

export default Pokedex;