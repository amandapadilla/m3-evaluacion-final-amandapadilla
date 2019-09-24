import React from "react";
import PropTypes from "prop-types";

const CharacterCard = props => {
  const { image, name, species } = props;
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <h2 className="card__name">{name}</h2>
      <p className="card__species">{species}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default CharacterCard;
