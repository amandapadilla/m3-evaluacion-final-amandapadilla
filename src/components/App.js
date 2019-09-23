import React from "react";
import { Route, Switch } from "react-router-dom";
import { getDataFromServer } from "../services/getDataFromServer";
import Home from "./Home";
import Header from "./Header";
import Detail from "./Detail";
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
        <Header />
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
                <Detail routerProps={routerProps} characters={characters} />
              );
            }}
          />
        </Switch>

        {/* <Detail characters={characters} /> */}
      </div>
    );
  }
}

export default App;
