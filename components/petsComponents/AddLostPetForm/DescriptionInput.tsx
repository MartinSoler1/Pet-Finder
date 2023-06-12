import React from "react";

const DescriptionInput = (props) => {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="description"
      >
        Description
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        value={props.value}
        onChange={props.handleInputChange}
        required
        rows={parseInt("5")}
      ></textarea>
    </div>
  );
};

export default DescriptionInput;
