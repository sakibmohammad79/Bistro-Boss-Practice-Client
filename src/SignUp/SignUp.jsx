import { Link } from 'react-router-dom';
import signUpImg from '../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
      console.log(watch("example"))
  return (
    <div className="hero min-h-screen bg-base-200 rounded-lg m-4 md:m-12 p-2 md:p-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="text-center lg:text-left">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                {...register("name")}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="Email"
                name='email'
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                {...register("password")}
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name='confirmpassword'
                {...register("confirmpassword")}
                placeholder="confirm password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
            <p className='text-center'>Already have an acount?<Link to='/login' className='text-orange-400 font-bold'> Please Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
