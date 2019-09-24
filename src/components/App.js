import React from "react";
import { Route, Switch } from "react-router-dom";
import { getDataFromServer } from "../services/getDataFromServer";
import Home from "./Home";
import Header from "./Header";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      inputFilter: ""
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
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
    ev.persist();
    const inputFilter = ev.currentTarget.value;
    const character = this.state.characters.filter(myCharacter =>
      myCharacter.name.toUpperCase().includes(inputFilter.toUpperCase())
    );
    this.setState({
      inputFilter: inputFilter,
      characters: character
    });
  }
  renderCharacterDetail(routerProps) {
    const id = parseInt(routerProps.match.params.id);
    const character = this.state.characters.find(
      character => character.id === id
    );
    return character;
  }

  render() {
    const { characters, inputFilter } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Home
                    getInputFilter={this.getInputFilter}
                    inputFilter={inputFilter}
                    characters={characters}
                  />
                );
              }}
            />
            <Route
              path="/detail/:id"
              render={routerProps => {
                return (
                  <CharacterDetail
                    routerProps={routerProps}
                    characters={this.renderCharacterDetail(routerProps)}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
