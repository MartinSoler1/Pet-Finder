import React, { ChangeEvent } from "react";

interface CountryInputProps {
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CountryInput: React.FC<CountryInputProps> = (props) => {
  return (
    <div className="mb-6 sm:w-1/2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="country"
      >
        Country
      </label>
      <input
        className="shadow appearance-none border rounded sm:w-48 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
