import PetItem from "./PetItem";

interface Pet {
  id: string;
  date: string;
  image: string;
  description: string;
  owner: string;
  address: string;
  phone: string;
  country: string;
  city: string;
  zipCode: string;
}
[];

interface Props {
  pets: Pet[];
}

const LostPetList: React.FC<Props> = (props: Props) => {
  return (
    <ul className="list-none m-0 p-0">
      {props.pets.map((pet: Pet) => (
        <PetItem
          id={pet.id}
          image={pet.image}
          owner={pet.owner}
          phone={pet.phone}
          description={pet.description}
          address={pet.address}
          country={pet.country}
          city={pet.city}
          zipCode={pet.zipCode}
          date={pet.date}
        />
      ))}
    </ul>
  );
};

export default LostPetList;
