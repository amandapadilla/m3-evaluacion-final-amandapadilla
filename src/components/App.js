import React from "react";
// import { Route, Switch } from "react-router-dom";
import { getDataFromServer } from "../services/getDataFromServer";
import Filter from "./Filter";
import List from "./List";

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
    const { characters, inputFilter } = this.state;
    return (
      <div className="App">
        <header className="header">
          <div className="header__logo">
            <img
              src="./logo.png"
              alt="Welcome to Rick and Morty characters directory"
            />
          </div>
        </header>
        <Filter
          getInputFilter={this.getInputFilter}
          inputFilter={inputFilter}
        />
        <List characters={characters} inputFilter={inputFilter} />
      </div>
    );
  }
}

export default App;
