import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-3xl text-red-500 font-semibold text-left">Hi, Welcome Back {user?.displayName}</h2>
        </div>
    );
};

export default AdminHome;