import React, { ChangeEvent } from "react";

interface ZipCodeInputProps {
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = (props) => {
  return (
    <div className="mb-6 w-1/2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="address"
      >
        Zip Code
      </label>
      <input
        className="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="address"
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
        required
      />
    </div>
  );
};

export default ZipCodeInput;
