// useAxiosSecure.js
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';


const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext); // Replace with your actual AuthContext usage

  // Create an Axios instance with a base URL
  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
  });

  // Interceptor for handling 401 and 402 responses
  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');

    axiosSecure.defaults.headers.common['authorization'] = `Bearer ${accessToken}`;

    const interceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // Logout user asynchronously and navigate to the login page
          logOut()
            .then(() => {
              navigate('/login'); // Navigate to the login page
            })
            .catch((logoutError) => {
              console.error('Error logging out:', logoutError);
              navigate('/login'); // Navigate to the login page even if logout fails
            });
        }
        return Promise.reject(error);
      }
    );

    // Clean up the interceptor when the component unmounts
    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [axiosSecure, navigate, logOut]);

  return [axiosSecure];
};

export default useAxiosSecure;
