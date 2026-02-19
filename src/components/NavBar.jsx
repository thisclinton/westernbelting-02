import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className='px-3 py-2 fixed z-50 w-full'>
        <nav className='flex items-center justify-between z-50'>
          <div className=''>
            <h3 className='uppercase text-xl'>Western Belting</h3>
          </div>

          <div
            className={`md:hidden absolute ${
              openMenu ? "right-0" : "-right-200"
            } top-0 bg-black text-white w-full h-svh transition-all duration-300`}
          >
            <div className='relative'>
              <ul className='pt-25 px-5 flex flex-col justify-center gap-5 text-3xl uppercase'>
                <li className=''>Home</li>
                <li className=''>About</li>
                <li className=''>Products</li>
                <li className=''>Services</li>
                <li className=''>Health & Safety</li>
                <li className=''>Industries</li>
                <li className=''>News & Media</li>
                <li className=''>Career</li>
                <li className=''>Contact Us</li>

                <div className='absolute right-2 top-2'>
                  <RiCloseFill
                    className='cursor-pointer'
                    onClick={menuToggle}
                  />
                </div>
              </ul>
            </div>
          </div>

          <div className='md:hidden'>
            <HiOutlineMenu
              className='text-xl cursor-pointer'
              onClick={menuToggle}
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
