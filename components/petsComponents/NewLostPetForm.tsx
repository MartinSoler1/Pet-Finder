import { useRef } from "react";
import Card from "../ui/Card";

interface NewLostPetFormProps {
  onAddPet: (petData: PetData) => void;
}

interface PetData {
  owner: string;
  phone: string;
  image: string;
  address: string;
  description: string;
  date: string;
}

const NewLostPetForm: React.FC<NewLostPetFormProps> = (props) => {
  const ownerInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredOwnerName: string = ownerInputRef.current?.value || "";
    const enteredphone: string = phoneInputRef.current?.value || "";
    const enteredImage: string = imageInputRef.current?.value || "";
    const enteredAddress: string = addressInputRef.current?.value || "";
    const enteredDescription: string = descriptionInputRef.current?.value || "";
    const enteredDate = new Date().toLocaleTimeString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const petData: PetData = {
      owner: enteredOwnerName,
      phone: enteredphone,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      date: enteredDate,
    };

    props.onAddPet(petData);
  }

  return (
    <Card>
      <div className="w-full">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitHandler}
        >
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
              ref={ownerInputRef}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="string"
              ref={phoneInputRef}
              required
            />
          </div>
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
              ref={imageInputRef}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="adress"
            >
              Last area seen
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="adress"
              type="text"
              ref={addressInputRef}
              required
            />
          </div>
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
              required
              rows={parseInt("5")}
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add your Pet
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};
export default NewLostPetForm;
