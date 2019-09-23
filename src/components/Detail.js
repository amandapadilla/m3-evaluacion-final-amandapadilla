import React from "react";
import { Link } from "react-router-dom";

const Detail = props => {
  const { routerProps, characters } = props;
  const id = parseInt(routerProps.match.params.id);
  const character = characters.filter(character => character.id === id); //Hacer función en App con un método find
  const { name, image } = character[0];
  console.log(character[0]); //condicional con Loading
  return (
    <div>
      <Link to="/">Volver</Link>
      {/* <img src={image} alt={name} />
      <h2>Nombre {name}</h2>
      <p>{character[0].name}</p> */}
      <p>Especie</p>
      <p>Origen</p>
      <p>NºdeEpisodios</p>
      <p>Estatus: muerto o vivo</p>
    </div>
  );
};
export default Detail;
