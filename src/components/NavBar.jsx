import React, { useState } from 'react';
import logo from '../assets/LOGO_MIGUEL_CABRERA.png';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const Links = [
    { name: 'Home', link: '#' },
    { name: 'About Me', link: '#' },
    { name: 'Projects', link: '#' },
    { name: 'Contact Me', link: '#' }
  ];

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex flex items-center justify-between px-4 bg-nav'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-serif'>
          <span className='text-3xl text-gray-400 '>
            <img className='w-40 h-30' src={logo} alt='Miguel Cabrera' />
          </span>
        </div>
        <div className='md:hidden cursor-pointer  ' onClick={toggleLinks}>
          <svg
            className='w-10 h-10 text-gray-400 hover:text-black duration-300'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {showLinks ? (
              <path d='M6 18L18 6M6 6l12 12'></path>
            ) : (
              <path d='M4 6h16M4 12h16m-7 6h7'></path>
            )}
          </svg>
        </div>
        <ul
          className={`${
            showLinks
              ? 'flex-col md:flex-row md:items-center md:pb-2 pb-12 pr-4 mt-2'
              : 'hidden'
          } md:flex md:items-center`}
        >
          {Links.map((link, index) => (
            <li key={index} className='md:ml-5 text-xl mb-4 md:mb-0 '>
              <a
                href={link.link}
                className='text-black hover:text-gray-400 duration-500 font-bold'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
