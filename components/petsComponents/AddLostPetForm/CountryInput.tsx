import React from "react";

const CountryInput = (props) => {
  return (
    <div className="mb-6 sm:w-1/2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="country"
        placeholder="Pet last seen adress"
      >
        Country
      </label>
      <input
        className="shadow appearance-none border rounded  sm:w-48 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Pet last seen country"
        id="country"
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
        required
      />
    </div>
  );
};

export default CountryInput;
