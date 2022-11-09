import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navList = <>
    <Link to='/home'><p className='text-xl text-orange-400 ml-5'>Home</p></Link>
    <Link to='/home'><p className='text-xl text-orange-400 ml-5'>Food Items</p></Link>
    <Link to='/home'><p className='text-xl text-orange-400 ml-5'>Services</p></Link>
    <Link to='/home'><p className='text-xl text-orange-400 ml-5'>About</p></Link>
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
          <Link className="text-orange-400 font-bold text-3xl">RIFAT KITCHEN</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          {navList}
        </div>
        <div className="navbar-end">
          <Link className="bg-orange-400 text-white hover:text-orange-400 hover:bg-white duration-300 hover:border-2 hover:border-orange-400 px-4 py-3 text-xl font-semibold rounded-md">Get started</Link>
        </div>
      </div>
    );
};

export default Header;