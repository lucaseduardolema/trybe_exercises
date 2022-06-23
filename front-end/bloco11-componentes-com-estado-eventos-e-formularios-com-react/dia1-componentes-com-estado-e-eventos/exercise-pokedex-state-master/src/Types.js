import React from 'react';
import pokemons from './data';

class Types extends React.Component {
  render() {
    return (
      <div>
        {pokemons.map((pokemon) => (<button
          key={ pokemon.type }
          type="button"
        >
          {pokemon.type}
        </button>))}

      </div>
    );
  }
}

export default Types;
