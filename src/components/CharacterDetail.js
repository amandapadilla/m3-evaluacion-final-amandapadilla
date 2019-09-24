import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = props => {
  const { routerProps, characters } = props;

  // const { name, image } = character[0];
  // console.log(character[0]); //condicional con Loading

  //para pintar datos de episodios episodes.legth()
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
        <img
          src="https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/14.jpeg"
          alt="Character"
          className="detail__card--image"
        />
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
export default CharacterDetail;
