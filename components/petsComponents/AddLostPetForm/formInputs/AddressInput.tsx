import React, { ChangeEvent } from "react";

interface AddressInputProps {
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AddressInput: React.FC<AddressInputProps> = (props) => {
  return (
    <div className="mb-6 sm:w-1/2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="adress"
      >
        Address line
      </label>
      <input
        className="shadow appearance-none border sm:w-72 w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Pet last seen address"
        id="adress"
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
        required
      />
    </div>
  );
};

export default AddressInput;
