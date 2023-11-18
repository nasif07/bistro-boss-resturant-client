import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    // const isAdmin = true;

    const [isAdmin] = useAdmin();



    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to={"/dashboard/adminhome"}><FaHome></FaHome>Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/additems"}><FaUtensils></FaUtensils>Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageitems"}><FaList></FaList>Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/bookings"}><FaBook></FaBook>Manage Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/allusers"}><FaUser></FaUser>All Users</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to={"/dashboard/cart"}><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/userhome"}><FaHome></FaHome>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/reservation"}><FaCalendar></FaCalendar>Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/review"}><FaAd></FaAd>Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/bookings"}><FaList></FaList>My Bookings</NavLink>
                                </li>
                            </>
                    }




                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={"/"}><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"}><FaHome></FaHome>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"}><FaEnvelope></FaEnvelope>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;