const CardDisplay = ({ menuCard }) => {
  const { image, name, recipe } = menuCard;
  return (
    <div className="card w-86 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="menu"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
