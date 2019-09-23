import React from "react";
// import { Route, Switch } from "react-router-dom";
import { getDataFromServer } from "../services/getDataFromServer";
// import Filter from "./Filter";
// import List from "./List";

import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      inputFilter: ""
    };
    this.getInputFilter = this.getInputFilter.bind(this);
  }
  componentDidMount() {
    this.getCharactersInfo();
  }
  getCharactersInfo = () => {
    getDataFromServer().then(data => {
      this.setState({
        characters: data.results
      });
    });
  };
  getInputFilter(ev) {
    const inputFilter = ev.currentTarget.value;
    this.setState({
      inputFilter: inputFilter
    });
  }
  render() {
    const { characters, inputFilter, getInputFilter } = this.state;
    console.log(characters, inputFilter);
    return (
      <div className="App">
        <header>
          <div>
            <img
              src="./logo.png"
              alt="Welcome to Rick and Morty characters directory"
            />
          </div>
        </header>
        <div>
          <label htmlFor="textFilter">Search a character</label>
          <input
            type="text"
            id="textFilter"
            placeholder="Write their name here"
            onChange={getInputFilter}
            value={inputFilter}
          />
        </div>
        <div>
          <ul>
            {characters
              .filter(myCharacter =>
                myCharacter.name
                  .toUpperCase()
                  .includes(inputFilter.toUpperCase())
              )
              .map(character => (
                <li className="character" key={character.id}>
                  <div>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p>{character.species}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {/* <Filter
          getInputFilter={this.getInputFilter}
          inputFilter={inputFilter}
          characters={characters}
        /> */}
        {/* <List /> */}
      </div>
    );
  }
}

export default App;
