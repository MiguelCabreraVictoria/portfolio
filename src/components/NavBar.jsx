import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Toaster, toast } from 'sonner';
import logo from '../assets/LOGO_MIGUEL_CABRERA.png';
import PDFDocument from './pdf/PDFDocument';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Links = [
    { name: 'Home', link: '#' },
    { name: 'About Me', link: '#' },
    { name: 'Projects', link: '#' },
    { name: 'Contact Me', link: '#' },
  ];

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='w-full  top-0 left-0'>
      <div className='md:flex items-center justify-between px-4 bg-[#b6b5b5e4] border-black border-b-4 py-2'>
        <div className='flex items-center'>
          <div className=' flex font-bold text-2xl cursor-pointer '>
            <span className='text-3xl text-gray-400'>
              <ul
                  className={`${
                    toggleMenu
                      ? 'flex-col md:flex-row md:items-center md:pb-2 pb-12 pr-4 mt-2'
                      : 'hidden'
                  } md:flex md:items-center`}
              >
            {Links.map((link, index) => (
              <li key={index} className='md:ml-5 text-xl mb-4 md:mb-0'>
                <a
                  href={link.link}
                  className='text-black font-bold '
                >
                  {link.name}
                </a>
              </li>
        ))}
        {/* PDF Download Button */}
        <li className='md:ml-5 text-xl mb-4 md:mb-0'>
          <Toaster position='bottom-center' />
          <PDFDownloadLink document={<PDFDocument />} fileName='MiguelCabreraVictoria.pdf'>
            {({ loading }) => (
              <button
                className={`bg-black text-[#e1dada] rounded p-1 font-bold hover:bg-[#7b7171b6] hover:text-[#FEFAE0] ${
                  loading ? 'cursor-not-allowed' : ''
                }`}
                onClick={() => {
                  if (!loading) {
                    toast.success('Downloaded', {
                      duration: 5000,
                    });
                  }
                }}
              >
                {loading ? 'Loading File' : 'MY CV'}
              </button>
            )}
          </PDFDownloadLink>
        </li>
      </ul>
            </span>
          </div>
        </div>
        <div className='md:hidden justify-start cursor-pointer' onClick={toggleMenuHandler}>
          <svg
            className='w-6 h-6 text-gray-400 hover:text-black duration-300'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {toggleMenu ? (
              <path d='M6 18L18 6M6 6l12 12'></path>
            ) : (
              <path d='M4 6h16M4 12h16m-7 6h7'></path>
            )}
          </svg>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
