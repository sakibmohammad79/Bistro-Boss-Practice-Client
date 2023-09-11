import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const {loginByGoogle} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLoginByGoogle = () => {
        loginByGoogle()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser); 
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
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
               toast('New User LogIn')
              }
              navigate(from, {replace: true});
            });  
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='p-4'>
            <div className="divider"></div>
            <button onClick={handleLoginByGoogle} className="btn btn-outline btn-warning w-full"><FaGoogle></FaGoogle> LogIn By Google</button>
        </div>
    );
};

export default SocialLogin;