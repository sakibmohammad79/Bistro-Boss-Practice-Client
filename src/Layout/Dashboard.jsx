import { Helmet } from "react-helmet-async";
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaMap, FaShoppingCart, FaShuttleVan, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCard from "../Hooks/useCard";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
const [cart] = useCard();

//Todo
// const isAdmin = true;
const [isAdmin] = useAdmin();

  return (
    <>
    <Helmet>
        <title>Bistor Boss | Dashboard</title>
      </Helmet>
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
      <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary mr-auto ml-4 my-4 drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full text-white text-lg bg-[#F10066]">
          {/* Sidebar content here */}
          {
            isAdmin?
            <>
            <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/reservations'><FaUtensils></FaUtensils> Add Items</NavLink></li>
            <li><NavLink to='/dashboard/reservations'><FaBars></FaBars> Manage Items </NavLink></li>
            <li><NavLink to='/dashboard/reservations'><FaBook></FaBook> Manage Booking</NavLink></li>
            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>
            </> 
            :
            <>
            <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
            <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment History</NavLink></li>
            <li><NavLink to='/dashboard/mycart'><div className="indicator">
            <span className="indicator-item badge badge-secondary">{cart?.length || +0}</span>
            <button className="btn btn-sm"><FaShoppingCart></FaShoppingCart></button>
            </div>
            My Cart
            </NavLink></li>
            </>
          }
          <div className="divider"></div>
          <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
          <li><NavLink to="/menu"><FaMap></FaMap>Menu</NavLink></li>
          <li><NavLink to="/order/salad"><FaShuttleVan></FaShuttleVan>Order</NavLink></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
