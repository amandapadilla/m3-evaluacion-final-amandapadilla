import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = props => {
  const { characters } = props;
  if (characters) {
    const { image, name, species, origin, episode, status } = characters;
    const isDeadOrAlive = () => {
      if (status === "Alive") {
        return "Alive";
      } else if (status === "Dead") {
        return "Dead";
      } else {
        return "It's not your f*ckin' bussines, jerk!";
      }
    };
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
          <img src={image} alt={name} className="detail__card--image" />
          <h2>Name: {name}</h2>
          <p>Specie: {species}</p>
          <p>Origin: {origin.name}</p>
          <p>You have seen me in {episode.length} episodes</p>
          <div>
            <p>Status: {isDeadOrAlive()}</p>
          </div>
          <img
            src="./images/ricky-morty.png"
            alt="Rick and Morty"
            className="detail__rick-morty"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="fail">
        <h2 className="fail__message">
          Hi! I'm Mr. Meeseeks, look at me! Sorry, there isn't a coincidence. Oh
          no! I can't help you and will live foreveeeeeeeer!!!
        </h2>
      </div>
    );
  }
};
export default CharacterDetail;
