import React from "react";
import pokemons from "../data";

class Card extends React.Component {
  render() {
    return (
      <div>
        {pokemons.map((pokemon) => {
          const { name, id, type, averageWeight, image } = pokemon
          return (
            <div className="pokemon" key={id}>
              <div className="info">
                <p>{name}</p>
                <p>{type}</p>
                <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
              </div>
              <div className="image">
                <img src={image} alt={name} />
              </div>
            </div>
          )
        })}
      </div>
    )
    
  }
}

export default Card