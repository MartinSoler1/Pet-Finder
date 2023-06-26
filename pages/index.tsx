import { MongoClient } from "mongodb";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import LostPetList from "../components/petsComponents/homeComponents/LostPetList";
import ImagesSlider from "../components/petsComponents/homeComponents/ImagesSlider";
import { Amatic_SC } from "@next/font/google";
import TextSection from "../components/petsComponents/homeComponents/TextSection";

const h1Font = Amatic_SC({
  subsets: ["latin"],
  weight: ["400"],
});

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
interface HomePageProps {
  pets: Pet[];
}
const HomePage: NextPage<HomePageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Pet Finder</title>
        <meta
          name="description"
          content="Find your lost pet or help others find them!"
        />
      </Head>
      <ImagesSlider />
      <h1 className={`${h1Font.className} text-center text-4xl`}>
        If you see me, please contact my humans!
      </h1>
      <TextSection />
      <LostPetList pets={props.pets} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@petfinderapp.yitpwio.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const petsCollection = db.collection("pets");

  const pets = await petsCollection.find().sort({ _id: -1 }).toArray();
  client.close();

  return {
    props: {
      pets: pets.map((pet: any) => ({
        owner: pet.owner,
        phone: pet.phone,
        address: pet.address,
        city: pet.city,
        country: pet.country,
        zipCode: pet.zipCode,
        image: pet.image,
        description: pet.description,
        id: pet._id.toString(),
        date: pet.date,
      })),
    },
  };
};

export default HomePage;
