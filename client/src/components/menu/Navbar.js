import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black lg:-mt-1 lg:h-24'
      role='navigation'
    >
      <NavLink to='/' className='pl-8'>
        Home
      </NavLink>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='hidden md:flex md:items-center md:w-auto w-full '>
        <NavLink to='/' className='md:px-4 py-2 text-center block md:mb-0 mb-2 border-2 transition-colors'>
         Domov
        </NavLink>
        <NavLink to='/s' className='md:px-4 py-2 text-center block md:mb-0 mb-2 border-2 transition-colors'>
         Something
        </NavLink>
      </div>
    </nav >
  );
};

export default Navbar;