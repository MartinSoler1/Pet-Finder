import PetItem from "./PetItem";

function LostPetList(props) {
  return (
    <ul className="list-none m-0 p-0">
      {props.pets.map((pet) => (
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
}

export default LostPetList;
