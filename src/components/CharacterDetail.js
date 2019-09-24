import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
          Back to hooome, mdfk!
        </Link>
        <div className="detail__card">
          <img src={image} alt={name} className="detail__card--image" />
          <h2 className="detail__card--name">Name: {name}</h2>
          <p className="detail__card--species">Specie: {species}</p>
          <p className="detail__card--origin">Origin: {origin.name}</p>
          <p className="detail__card--episode">
            You have seen me in {episode.length} episodes
          </p>
          <p className="detail__card--status">Status: {isDeadOrAlive()}</p>
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
        <p className="fail__message">
          Hi! I'm Mr. Meeseeks, look at me! Sorry, there isn't a coincidence. Oh
          no! I can't help you and will live foreveeeeeeeer!!!
        </p>
      </div>
    );
  }
};

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default CharacterDetail;
