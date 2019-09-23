import React from "react";
import Filter from "./Filter";
import List from "./List";

const Home = props => {
  const { getInputFilter, inputFilter, characters } = props;
  return (
    <React.Fragment>
      <Filter getInputFilter={getInputFilter} inputFilter={inputFilter} />
      <List characters={characters} inputFilter={inputFilter} />
    </React.Fragment>
  );
};
export default Home;
