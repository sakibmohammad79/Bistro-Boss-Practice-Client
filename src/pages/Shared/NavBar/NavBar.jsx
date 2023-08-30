import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaShoppingCart } from 'react-icons/fa';
import useCard from "../../../Hooks/useCard";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCard();

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/order/salad">Order</Link></li>
      <li><Link to="/dashboard/mycart" >
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">{cart?.length || +0}</span>
            <button className="btn btn-sm"><FaShoppingCart></FaShoppingCart></button>
          </div>
        </Link></li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white font-bold max-w-6xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl md:text-4xl ">
          Bistro Boss
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              style={{ height: "50px", width: "50px" }}
              className="rounded-full mr-2 md:mr-4"
              src={user?.photoURL}
              alt=""
            />
            <Link onClick={handleSignOut}>
              <a className="btn bg-orange-700 border-none px-6 uppercase text-white">
                signOut
              </a>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <a className="btn bg-orange-700 border-none px-6 uppercase text-white">
              Login
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
