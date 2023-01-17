import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContexts';

const Header = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const name = user?.displayName;

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('successfully Loged out')
            })
            .catch(err => console.log(err))
    }
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="appointment">Appointment</Link></li>
                        <li><Link to="reviews">Reviews</Link></li>
                        <li><Link to="contactus">Contact Us</Link></li>
                        {
                            user?.uid ? <><li><Link to="dashboard">Dashboard</Link></li>
                                <li><button onClick={handleLogout}>Log Out</button></li></>
                                : <li><Link to="login">Log In</Link></li>

                        }
                        {
                            user?.uid ? <li><Link>{name}</Link></li>
                                : <li><Link>User Name</Link></li>
                        }
                    </ul>
                </div>
                <Link to="" className="btn btn-ghost normal-case text-xl">Doctors BD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="appointment">Appointment</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                    <li><Link to="contactus">Contact Us</Link></li>
                    {
                        user?.uid ?
                            <><li><Link to="dashboard">Dashboard</Link></li>
                                <li><button onClick={handleLogout}>Log Out</button></li></>
                            : <li><Link to="login">Log In</Link></li>
                    }
                    {
                        user?.uid ? <li><Link>{name}</Link></li>
                            : <li><Link>User Name</Link></li>
                    }
                </ul>
            </div>
        </div>

    );
};

export default Header;