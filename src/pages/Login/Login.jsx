import { useEffect, useRef, useState } from 'react';
import authenticationImg from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';
const Login = () => {

    const captchaRef = useRef();
    const [desable, setdesable] = useState(true)

    const {signIn} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
    }
    useEffect(()=> {
        loadCaptchaEnginge(6);
    },[]);

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setdesable(false)
        }
   
        else {
            toast('Captcha Does Not Match');
            setdesable(true)
        }
    }
  return (
    <div className="hero my-8 p-12 bg-base-200">
      <div className="hero-content gap-4 flex-col-reverse md:flex-row">
        <div className="">
          <img src={authenticationImg} alt="" />
        </div>
        <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
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
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name='captcha'
                placeholder="captcha"
                className="input input-bordered"
              />
            </div>
            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">validate</button>
            <div className="form-control mt-6">
              <input disabled={desable} className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className='text-center'>New Here?<Link className='text-orange-400 font-bold' to='/signup'> Register Please</Link></p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
