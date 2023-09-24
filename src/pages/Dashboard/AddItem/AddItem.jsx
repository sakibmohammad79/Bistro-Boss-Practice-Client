import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    
    register, handleSubmit, formState: { errors },} = useForm();
    const onSubmit = (data) => console.log('add item data', data)
    console.log(errors);

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
            <select {...register("category", { required: true })} className="select select-bordered">
              <option disabled selected>
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
