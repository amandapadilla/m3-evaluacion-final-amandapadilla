import React from "react";

const Filters = props => {
  const { getInputFilter, inputFilter } = props;
  return (
    <div className="form">
      <label htmlFor="textFilter" className="form__label">
        Search a character
      </label>
      <input
        className="form__input-text"
        type="text"
        id="textFilter"
        placeholder="Write here!"
        onChange={getInputFilter}
        value={inputFilter}
      />
    </div>
  );
};
export default Filters;