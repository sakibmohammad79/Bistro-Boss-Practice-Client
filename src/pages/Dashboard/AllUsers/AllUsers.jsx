import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.get(`/users/admin/${user._id}`,{
        method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            refetch();
            Swal.fire(`${user.name} is an admin now`);
        }
    })
  }

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className=" w-[100%] md:w-full px-2 md:px-4">
      <Helmet>
        <title>Bistor Boss | All Users</title>
      </Helmet>
      <h3 className="text-3xl text-pink-500 font-semibold py-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto w-[100%]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={()=>handleMakeAdmin(user)}>{user.role === "admin" ? "Admin" : <FaUserShield className="text-orange-500" size={25}></FaUserShield>}</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className=" text-red-600 btn-sm"
                  >
                    <FaTrashAlt size={20}></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
