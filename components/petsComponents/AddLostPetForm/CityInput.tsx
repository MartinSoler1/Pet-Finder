import React, { ChangeEvent } from "react";

interface CityInputProps {
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CityInput: React.FC<CityInputProps> = (props) => {
  return (
    <div className="mb-6 sm:w-1/2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="city"
      >
        City
      </label>
      <input
        className="shadow appearance-none border rounded sm:w-48 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Pet last seen city"
        id="city"
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
        required
      />
    </div>
  );
};

export default CityInput;
