const FoodCard = ({item}) => {
    const {name, price, image, recipe} = item;
  return (
    <div className="card w-86 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute text-white  bg-slate-800 right-0 mt-3 mr-3 px-4 rounded-lg">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
        <p className="text-center"><button className="mt-4 btn bg-slate-100 btn-outline border-0 border-b-4 border-orange-300 mb-4">Add To Card</button></p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;