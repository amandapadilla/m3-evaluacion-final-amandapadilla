import React from "react";
import Card from "./Card";
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
                <Card
                  name={character.name}
                  image={character.image}
                  species={character.species}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default List;
