import { Link, useNavigate } from 'react-router-dom';
import signUpImg from '../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../components/SocialLogin/SocialLogin';


const SignUp = () => {
  const navigate = useNavigate();
  const {createUser, updateUserProfile} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm() 

      const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);

          updateUserProfile(data.name, data.photoURL)

          const saveUser = { name: data.name, email: data.email };
          console.log(saveUser);

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                toast("User SignUp Successfully!")
                navigate("/");
              }
            });
        });
      };
      
      
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
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="Email"
                name='email'
                {...register("email", { required: true })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
            
                type="password"
                name='password'
                {...register("password", { required: true,
                   maxLength: 20,
                    minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}
                placeholder="password"
                className="input input-bordered"
              />
               {errors.password?.type === 'required' && <p className='text-red-600' role="alert">password is required</p>}
              {errors.password?.type === "minLength" && <p className='text-red-600' role="alert">Password must be 6 characters</p>}
              {errors.password?.type === "pattern" && <p className='text-red-600' role="alert">password have one upper case, one lower case, one digit and one special characters</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name='confirmpassword'
                {...register("confirmpassword", { required: true })}
                placeholder="confirm password"
                className="input input-bordered"
              />
              {errors.confirmpassword && <span className='text-red-600'>This field is required</span>}
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name='photoURL'
                {...register("photoURL", { required: true })}
                placeholder="photoURL"
                className="input input-bordered"
              />
              {errors.photoURL && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
            <p className='text-center'>Already have an acount?<Link to='/login' className='text-orange-400 font-bold'> Please Login</Link></p>
          </form>
          <SocialLogin></SocialLogin>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
