import { useRouter } from "next/router";
import NewLostPetForm from "../../components/petsComponents/AddLostPetForm/NewLostPetForm";
import { useSession } from "next-auth/react";

const NewLostPetPage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  const router = useRouter();
  const addPetHandler = async (enteredpetData) => {
    const response = await fetch("/api/new-pet", {
      method: "POST",
      body: JSON.stringify(enteredpetData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  };

  return (
    <div>
      <NewLostPetForm onAddPet={addPetHandler} />
    </div>
  );
};

export default NewLostPetPage;
