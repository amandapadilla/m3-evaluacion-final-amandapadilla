import React from "react";
import { Link } from "react-router-dom";

const Detail = props => {
  // const { routerProps, characters } = props;
  // const id = parseInt(routerProps.match.params.id);
  // const character = characters.filter(character => character.id === id); //Hacer función en App con un método find
  // const { name, image } = character[0];
  // console.log(character[0]); //condicional con Loading
  return (
    <div className="detail">
      <img
        src="./images/pickle.png"
        className="detail__pickle"
        alt="Pickle Rick!!!"
      />
      <Link to="/" className="detail__back-home">
        Back to home!
      </Link>
      <div className="detail__card">
        <img src="" alt="Character" className="detail__card--image" />
        <h2>Name: </h2>
        <p>Specie: </p>
        <p>Origin:</p>
        <p>You have seen me in X episodes</p>
        <p>Status: dead or alive</p>
        <img
          src="./images/ricky-morty.png"
          alt="Rick and Morty"
          className="detail__rick-morty"
        />
      </div>
    </div>
  );
};
export default Detail;
