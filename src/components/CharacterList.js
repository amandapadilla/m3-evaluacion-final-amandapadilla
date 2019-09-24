import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

const CharacterList = props => {
  const { characters } = props;
  if (characters.length === 0) {
    return (
      <div className="fail">
        <h2 className="fail__message">
          Hi! I'm Mr. Meeseeks, look at me! Sorry, there isn't a coincidence. Oh
          no! I can't help you and will live foreveeeeeeeer!!!
        </h2>
      </div>
    );
  } else {
    return (
      <div className="list">
        <ul className="list__list-type">
          {characters.map(character => {
            return (
              <li className="list__item-character" key={character.id}>
                <Link to={`/detail/ ${character.id}`}>
                  <CharacterCard
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
  }
};
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterList;
