import PetItem from "./PetItem";

interface Pet {
  date: string;
  image: string;
  description: string;
  owner: string;
  key?: string;
  address: string;
  phone: string;
  id: string;
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
          key={pet.id}
          id={pet.id}
          image={pet.image}
          owner={pet.owner}
          phone={pet.phone}
          description={pet.description}
          address={pet.address}
          date={pet.date}
        />
      ))}
    </ul>
  );
};

export default LostPetList;
