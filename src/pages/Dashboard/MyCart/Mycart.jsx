import { Helmet } from "react-helmet-async";
import useCard from "../../../Hooks/useCard";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

const Mycart = () => {
    const [cart, refetch] = useCard();

    console.log(cart)
    const TotalPrice = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`,{
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              }) 
            }
          })
    }

  return (
    <div className="w-[100%] md:w-full px-2 md:px-4">
      <Helmet>
        <title>Bistor Boss | My Cart</title>
      </Helmet>
      <div className="flex justify-center items-center text-secondary gap-8 py-4 pl-4 md:pl-0">
        <h2 className="text-lg md:text-3xl font-bold uppercase">Total Items: {cart.length}</h2>
        <h2 className="text-lg md:text-3xl font-bold uppercase">Total Price: {TotalPrice}</h2>
        <button className="btn btn-active btn-sm btn-primary">Pay</button>
      </div>

      <div className="overflow-x-auto">
  <table  className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item, index) => <tr key={item.id}>
                <th>
                  {index+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.price}
                </td>
                <td>
                  <button onClick={()=>handleDelete(item)} className=" text-red-600 btn-sm"><FaTrashAlt size={20}></FaTrashAlt></button>
                </td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Mycart;
