const Card = (props) => {
    const {username="Unkown User", imgUrl} = props;
  // console.log(props);
  return (
    <div className="p-3 m-4 bg-red-200 w-40">
      <img
        className="w-36"
        src={imgUrl}
      />
      <div>
        <h1 className="font-bold text-2xl">{username}</h1>
        <p className="text-lg font-semibold">Web Developer</p>
      </div>
    </div>
  );
};

export default Card;
