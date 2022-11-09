import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.error(err))
  }

  const navList = <>
    <Link to='/home'><p className='text-xl font-semibold ml-5'>Home</p></Link>
    <Link to='/food-items'><p className='text-xl font-semibold ml-5'>Food Items</p></Link>
    <Link to='/blog'><p className='text-xl font-semibold ml-5'>Blog</p></Link>
    {
    user?.email ? 
    <Link onClick={handleLogOut}><p className='text-xl font-semibold ml-5'>Log Out</p></Link>
      : <>
        <Link to='/login'><p className='text-xl font-semibold ml-5'>Log In</p></Link>
        <Link to='/signup'><p className='text-xl font-semibold ml-5'>Sign Up</p></Link>
      </>
    }
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navList}
          </ul>
        </div>
        <div className='flex items-center'>
          <img className='w-20' src="https://i.postimg.cc/6pC8wMWW/2-copy.png" alt="" />
          <Link to='/' className="text-orange-400 font-bold text-3xl">RIFAT KITCHEN</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {navList}
      </div>
      <div className="navbar-end">
        <Link to='/addFood' className="bg-orange-400 text-white hover:text-orange-400 hover:bg-white duration-300 hover:border-2 hover:border-orange-400 px-4 py-3 text-xl font-semibold rounded-md">Add Food Item</Link>

        <div className="ml-5 dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full">
              <img className='w-24' src={user?.photoURL} alt='' />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><p className="mx-3 text-xl font-semibold rounded-md">{user?.displayName}</p></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Header;