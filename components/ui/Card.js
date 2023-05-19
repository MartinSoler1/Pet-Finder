function Card(props) {
  return (
    <div className="bg-white rounded-md sm:shadow-2xl my-12 mx-auto sm:w-11/12 max-w-2xl">
      {props.children}
    </div>
  );
}

export default Card;
