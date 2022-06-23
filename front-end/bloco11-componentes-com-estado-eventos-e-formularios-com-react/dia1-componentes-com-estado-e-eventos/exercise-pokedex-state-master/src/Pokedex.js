import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
    };

    this.handlePokemonIndex = this.handlePokemonIndex.bind(this);
  }

  handlePokemonIndex(total) {
    this.setState((prevPokIndex) => ({
      pokemonIndex: (prevPokIndex.pokemonIndex + 1) % total,
    }));
  }

  render() {
    const { pokemons } = this.props;
    const { pokemonIndex } = this.state;
    const tamanhoLista = pokemons.length;
    return (
      <div className="pokedex">
        <Pokemon pokemon={ pokemons[pokemonIndex] } />
        <button
          onClick={ () => this.handlePokemonIndex(tamanhoLista) }
          type="button"
        >
          Proxímo Pokemon
        </button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
