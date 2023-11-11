/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState} from 'react';
import { TransperentLogo, close, menu } from '../assets'; 
//import { navLinks } from '../constants';
//const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);

  // return (
  //   <nav className="flex items-center justify-between w-full py-6 navbar bg-gray-950">
  //     <img src={TransperentLogo} alt="Young-Architects" className="w-[140px] h-[150px]" />

  //     <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
  //       {navLinks.map((nav, index) => (
  //         <li
  //           key={nav.id}
  //           className={`font-poppins font-normal cursor-pointer text-[16px] ${
  //             active === nav.title ? "text-white" : "text-dimWhite"
  //           } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
  //           onClick={() => setActive(nav.title)}
  //         >
  //           <a href={`#${nav.id}`}>{nav.title}</a>
  //         </li>
  //       ))}
  //     </ul>
  //     </nav>
  // )}
//       <div className="flex items-center justify-end flex-1 sm:hidden">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="flex flex-col items-start justify-end flex-1 list-none">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.title ? "text-white" : "text-dimWhite"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-1 bg-gray-800 py-auto">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center">
          <img src={TransperentLogo} alt="Young-Architects" className='w-[140px] h-[150px]' />
          {/* <h1 className="text-2xl font-bold text-white">Your Logo</h1> */}
        </div>
        <div className="hidden space-x-4 md:flex">
          <a href="#" className="text-white fa-sharp fa-solid fa-house fa-fade">Home</a>
          <a href="#" className="text-white fa-sharp fa-regular fa-address-card">About</a>
          <a href="#" className="text-white fa-sharp fa-regular fa-bell">Services</a>
          <a href="#" className="text-white fa-sharp fa-solid fa-phone">Contact</a>
        </div>

        {/* Responsive */}

        <div className="flex items-center justify-end flex-1 sm:hidden">
        
        <div className={`${!isOpen ? "hidden" : "flex"}
        p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
          <img
          src={isOpen ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setIsOpen(!isOpen)}
        />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 md:hidden">
          <a href="#" className="block py-2 text-white">Home</a>
          <a href="#" className="block py-2 text-white">About</a>
          <a href="#" className="block py-2 text-white">Services</a>
          <a href="#" className="block py-2 text-white">Contact</a>
        </div>
      )}
      </div>
    </nav>
  );
};


export default Navbar;
