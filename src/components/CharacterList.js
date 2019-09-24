import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const CharacterList = props => {
  const { characters } = props;
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
};
//
// const CharacterList = props => {
//   if (=== 0 ){
//     return(
//       <div>No hay personajes</div>
//     );
//   }else{
//     return (<ul><Card name={props.name}/></ul>);
//   }
// }

export default CharacterList;
