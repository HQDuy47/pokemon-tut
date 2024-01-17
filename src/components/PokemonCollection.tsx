import React from "react";
import { Pokemon, Detail } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: Pokemon[];
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetail, setDetail } = props;
  return (
    <div>
      <section className="collection-container">
        {pokemons.map((pokemon) => {
          return (
            <div className="">
              <PokemonList
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PokemonCollection;
