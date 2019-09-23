import React from "react";

const Card = props => {
  const { image, name, species } = props;
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <h2 className="card__name">{name}</h2>
      <p className="card__species">{species}</p>
    </div>
  );
};
export default Card;
