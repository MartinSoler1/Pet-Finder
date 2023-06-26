import React from "react";
import { GetStaticPropsContext, GetStaticPaths } from "next";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import PetDetail from "../../components/petsComponents/homeComponents/PetDetail";

interface MeetupDetailsProps {
  petData: {
    image: string;
    description: string;
    date: string;
  };
}

const MeetupDetails: React.FC<MeetupDetailsProps> = (props) => {
  return (
    <>
      <Head>
        <title>Pet Finder</title>
        <meta name="description" content={props.petData.description} />
      </Head>
      <PetDetail
        image={props.petData.image}
        description={props.petData.description}
        date={props.petData.date}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const client: MongoClient = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@petfinderapp.yitpwio.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const petsCollection = db.collection("pets");

  const filter: Record<string, unknown> = {};
  const options: Record<string, number> = { _id: 1 };

  const pets: { _id: string }[] = await petsCollection
    .find(filter as any, options)
    .toArray()
    .then((documents) => documents.map((doc) => ({ _id: doc._id.toString() })));

  client.close();

  return {
    fallback: "blocking",
    paths: pets.map((pet) => ({
      params: { petId: pet._id.toString() },
    })),
  };
};
export async function getStaticProps(context: GetStaticPropsContext) {
  const petId: string = context.params?.petId as string;

  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@petfinderapp.yitpwio.mongodb.net/?retryWrites=true&w=majority`
  );

  const db = client.db();

  const petsCollection = db.collection("pets");

  const selectedPet = await petsCollection.findOne({
    _id: new ObjectId(petId),
  });

  client.close();

  return {
    props: {
      petData: selectedPet
        ? {
            id: selectedPet._id?.toString(),
            image: selectedPet.image,
            description: selectedPet.description,
            date: selectedPet.date,
          }
        : null,
    },
  };
}

export default MeetupDetails;
