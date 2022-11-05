import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-1">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-9 text-base font-medium text-gray-300 hover:text-[#00ADB5]"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-7 h-7 mr-3" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#222831]">
        <img src={logo} alt="logo" className="w-full h-50 object-contain" />
        <NavLinks />
        <div>
          <p className="absolute inset-x-0 bottom-4 text-center text-sm text-gray-400">©️ <a target="_blank" rel="noreferrer" href="https://github.com/Atharv-110" className="text-gray-400">Atharv Vani</a></p>
        </div>
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-[#EEEEEE] mr-2" onClick={() => setMobileMenuOpen(false)} />
        ) : <HiOutlineMenu className="w-6 h-6 text-[#EEEEEE] mr-2" onClick={() => setMobileMenuOpen(true)} />}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to- [#00ADB5] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-28 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        <div>
          <p className="absolute inset-x-0 bottom-4 text-center text-sm text-gray-300">©️ <a target="_blank" rel="noreferrer" className="text-gray-200" href="https://github.com/Atharv-110">Atharv Vani</a></p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
