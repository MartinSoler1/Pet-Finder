import React from "react";
import Card from "../ui/Card";
const PetDetail = (props) => {
  return (
    <section className="text-center my-12 mx-auto sm:w-11/12 max-w-2xl">
      <img
        src={props.image}
        alt={props.description}
        className="w-screen mb-8 sm:h-96 shadow-xl dark:shadow-gray-400 sm:rounded-lg"
      />
      <p className="text-sm text-gray-400 text-start ml-1 sm:ml-6 mb-1">
        {props.date}
      </p>
      <p>{props.description}</p>
    </section>
  );
};

export default PetDetail;
