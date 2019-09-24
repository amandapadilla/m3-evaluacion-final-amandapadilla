import React from "react";
import "../stylesheets/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__effect">
        <img
          className="header__logo"
          src="./images/logo.png"
          alt="Welcome to Rick and Morty characters directory"
        />
        <img
          className="header__animation"
          src="./images/animation.gif"
          alt="Welcome to Rick and Morty characters directory"
        />
      </div>
    </header>
  );
};
export default Header;
