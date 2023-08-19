import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {name, price, image, recipe, _id} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCard = (item) => {
      console.log(item);
      if(user && user.email) {
        const cartItem = {menuItemId: _id, name, price, email: user.email, image }
        fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your favourite food saved!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      } 
      else{
        Swal.fire({
          title: 'Please Login First!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }
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
        <p className="text-center"><button onClick={()=> handleAddToCard(item)} className="mt-4 btn bg-slate-100 btn-outline border-0 border-b-4 border-orange-300 mb-4">Add To Card</button></p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
