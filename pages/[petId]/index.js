import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import PetDetail from "../../components/petsComponents/PetDetail";
const MeetupDetails = (props) => {
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

export async function getStaticPaths() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const client = await MongoClient.connect(
    `mongodb+srv://${user}:${password}@petfinderapp.yitpwio.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const petsCollection = db.collection("pets");

  const pets = await petsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: pets.map((pet) => ({
      params: { petId: pet._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const petId = context.params.petId;

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
      petData: {
        id: selectedPet._id.toString(),
        image: selectedPet.image,
        description: selectedPet.description,
        date: selectedPet.date,
      },
    },
  };
}

export default MeetupDetails;
