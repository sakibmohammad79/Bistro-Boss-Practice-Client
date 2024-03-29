
import { FaTrashAlt } from 'react-icons/fa';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

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
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res => {
                console.log('delete menu', res.data)
                if(res.data.deletedCount > 0 ){
                refetch();
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
        <div className='w-full'>
        <div >
            <SectionTitle subHeading={"Hurry Up"} heading={"Manage All Items"}></SectionTitle>
        </div>
        <div className="overflow-x-auto">
        <table  className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Menu Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                  menu.map((item, index) => <tr key={item._id}>
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
                        {item.category}
                      </td>
                      <td className='text-right'>
                        ${item.price}
                      </td>
                      <td>
                        <button onClick={()=> handleDelete(item)} className=" text-red-600 btn-sm"><FaTrashAlt size={20}></FaTrashAlt></button>
                      </td>
                    </tr>)
              }
            
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default ManageItems;