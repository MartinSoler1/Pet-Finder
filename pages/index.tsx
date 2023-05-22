import { MongoClient } from "mongodb";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import LostPetList from "../components/petsComponents/LostPetList";
import ImagesSlider from "../components/petsComponents/ImagesSlider";
import { Amatic_SC } from "@next/font/google";

const h1Font = Amatic_SC({
  subsets: ["latin"],
  weight: ["400"],
});

interface Pet {
  owner: string;
  phone: string;
  address: string;
  image: string;
  description: string;
  id: string;
  date: string;
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
      <LostPetList pets={props.pets} />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@petfinderapp.yitpwio.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const petsCollection = db.collection("pets");

  const pets = await petsCollection.find().toArray();
  client.close();

  return {
    props: {
      pets: pets.map((pet: any) => ({
        owner: pet.owner,
        phone: pet.phone,
        address: pet.address,
        image: pet.image,
        description: pet.description,
        id: pet._id.toString(),
        date: pet.date,
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
