import React from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const Home = props => {
  const { getInputFilter, inputFilter, characters } = props;
  return (
    <React.Fragment>
      <Filters getInputFilter={getInputFilter} inputFilter={inputFilter} />
      <CharacterList characters={characters} inputFilter={inputFilter} />
    </React.Fragment>
  );
};
export default Home;
