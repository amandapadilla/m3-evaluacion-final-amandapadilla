import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const List = props => {
  const { characters, inputFilter } = props;
  return (
    <div className="list">
      <ul className="list__list-type">
        {characters
          .filter(myCharacter =>
            myCharacter.name.toUpperCase().includes(inputFilter.toUpperCase())
          )
          .map(character => {
            return (
              <li className="list__item-character" key={character.id}>
                <Link to={`/detail/ ${character.id}`}>
                  <Card
                    name={character.name}
                    image={character.image}
                    species={character.species}
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default List;
