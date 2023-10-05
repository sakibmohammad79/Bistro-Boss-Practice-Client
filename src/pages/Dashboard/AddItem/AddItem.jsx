import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const imageHostinToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;


const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register, handleSubmit, reset} = useForm();
    const imageHostingUrl =  `https://api.imgbb.com/1/upload?key=${imageHostinToken}`

    const onSubmit = (data) => {
      const formData = new FormData();
      formData.append('image', data.image[0]);

      
      fetch(imageHostingUrl, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imgResponse => {
        if(imgResponse.success){
          const imgUrl = imgResponse.data.display_url;
          const {category, name, price, recipe} = data;
          const newItem = {category, name, price: parseFloat(price), recipe, image: imgUrl}
          
          axiosSecure.post('/menu', newItem)
          .then(data => {
            //console.log("postign new menu", data.data);
            if(data.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'New Item Successfully Added!',
                showConfirmButton: false,
                timer: 1500
              })
              
            }
          })
        }
      })
     
    }

    console.log(imageHostinToken);

  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"What's New"}
        heading={"Add An Item"}
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-6">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
          {...register("name", { required: true, maxLength: 120 })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className=" md:flex gap-0 md:gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select defaultValue={"pizza"} {...register("category", { required: true })} className="select select-bordered">
              <option disabled>
                Pick one
              </option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text  font-semibold">Price*</span>
            </label>
            <input
            {...register("price", { required: true})}
              type="Number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
          {...register("recipe", { required: true, maxLength: 150 })}
            className="textarea textarea-bordered h-28"
            placeholder="Recipe Details"
          ></textarea>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
          {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>

        <input
          className="btn btn-secondary mt-4"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
