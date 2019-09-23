import React from "react";
import { Link } from "react-router-dom";

const Detail = props => {
  const { characters } = props;
  console.log(characters);
  return (
    <div>
      <Link to="/">Volver</Link>
      Detalle
      <img src={characters.image} alt={characters.name} />
      <h2>Nombre</h2>
      <p>Especie</p>
      <p>Origen</p>
      <p>NºdeEpisodios</p>
      <p>Estatus: muerto o vivo</p>
    </div>
  );
};
export default Detail;
