import { useRef, useState } from "react";
import Card from "../../ui/Card";
import AddressInput from "./AddressInput";
import CityInput from "./CityInput";
import ContactNameInput from "./ContactNameInput";
import CountryInput from "./CountryInput";
import DescriptionInput from "./DescriptionInput";
import ImageInput from "./ImageInput";
import PhoneInput from "./PhoneInput";
import ZipCodeInput from "./ZipCodeInput";
interface NewLostPetFormProps {
  onAddPet: (petData: PetData) => void;
}

interface PetData {
  owner: string;
  phone: string;
  image: string;
  description: string;
  date: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
}

const NewLostPetForm: React.FC<NewLostPetFormProps> = (props) => {
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredZipCode, setEnteredZipCode] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredDate = new Date().toLocaleTimeString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const petData: PetData = {
      owner: enteredFullName,
      phone: enteredPhone,
      image: enteredImage,
      address: enteredAddress,
      city: enteredCity,
      country: enteredCountry,
      zipCode: enteredZipCode,
      description: enteredDescription,
      date: enteredDate,
    };
    console.log(petData);
    props.onAddPet(petData);
  }

  return (
    <Card>
      <div className="w-full">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitHandler}
        >
          <ContactNameInput
            value={enteredFullName}
            handleInputChange={(event) =>
              setEnteredFullName(event.target.value)
            }
          />
          <PhoneInput
            value={enteredPhone}
            handleInputChange={(event) => setEnteredPhone(event.target.value)}
          />
          <ImageInput
            value={enteredImage}
            handleInputChange={(event) => setEnteredImage(event.target.value)}
          />
          <div className="sm:flex flex-wrap">
            <AddressInput
              value={enteredAddress}
              handleInputChange={(event) =>
                setEnteredAddress(event.target.value)
              }
            />

            <CityInput
              value={enteredCity}
              handleInputChange={(event) => setEnteredCity(event.target.value)}
            />
            <CountryInput
              value={enteredCountry}
              handleInputChange={(event) =>
                setEnteredCountry(event.target.value)
              }
            />
            <ZipCodeInput
              value={enteredZipCode}
              handleInputChange={(event) =>
                setEnteredZipCode(event.target.value)
              }
            />
            <DescriptionInput
              value={enteredDescription}
              handleInputChange={(event) =>
                setEnteredDescription(event.target.value)
              }
            />
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
