import React, { ChangeEvent } from "react";

interface ContactNameInputProps {
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ContactNameInput: React.FC<ContactNameInputProps> = (props) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="contact"
      >
        Contact Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="contact"
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
        required
      />
    </div>
  );
};

export default ContactNameInput;
