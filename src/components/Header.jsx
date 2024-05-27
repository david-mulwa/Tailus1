// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../constants';
import MenuSvg from '../assets/svg/MenuSvg';
import Button from './Button';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import { HamburgerMenu } from "./design/header";


const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-n-6 lg:backdrop-blur-sm ${openNavigation ? 'bg-white' : 'bg-white backdrop-blur-sm'}`}>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        {/* Logo */}
        <a className='block w-[12rem] xl:mr-8' href='/' onClick={handleClick}>
          Astro<span className="text-n-6">ship</span>
        </a>

        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 lg:flex lg:static lg:mx-auto lg:bg-transparent bg-white  `}>
          <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
            {navigation.map((item) => (
              <Link key={item.id} to={item.url} onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname ? 'z-2 lg:text-n-1' : 'lg:text-n-1'} lg:leading-5 lg:hover:text-n-7 xl:px-12 relative `}
              >
                {item.title}
              </Link>
              
            ))}
            <span></span>
          </div>
          <HamburgerMenu />
        </nav>

        <a href="/signup" className='button hidden mr-8 text-n-1 transition-colors hover:text-n-7 lg:block'>
          New Account
        </a>

        <Button className='hidden lg:flex' href="/signin">
          Sign In
        </Button>

        <Button className='ml-auto lg:hidden' onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
