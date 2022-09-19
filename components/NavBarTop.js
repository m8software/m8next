/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
export default function NavBarTop()  {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-white p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
          <Image
                    
                    src="/m8letters.svg"
                    alt="M8"
                    width={40}
                    height={40}
             
                    layout="intrinsic"

                />
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-purple-600 hover:text-white '>
                Contact
              </a>
            </Link>
            {/* <Link href='/hoodie'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Hoodies
              </a>
            </Link> */}
            {/* <Link href='/services'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-blue-600 hover:text-white'>
                Guides
              </a>
            </Link> */}
            <Link href='/software'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-gray-600 hover:text-white'>
                Software
              </a>
            </Link>
     
          </div>
        </div>
      </nav>
    </>
  );
};
