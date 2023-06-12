import React from "react";

const ImageInput = (props) => {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="image"
      >
        Pet Image
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="image"
        type="url"
        value={props.value}
        onChange={props.handleInputChange}
        required
      />
    </div>
  );
};

export default ImageInput;
