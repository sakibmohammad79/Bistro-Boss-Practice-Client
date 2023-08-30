import { Helmet } from "react-helmet-async";
import { FaCalendarAlt, FaHome, FaMap, FaShoppingCart, FaShuttleVan, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
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
          <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> User Home</NavLink></li>
          <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
          <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment History</NavLink></li>
          <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
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
