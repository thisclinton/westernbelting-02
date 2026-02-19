import React from "react";

function Footer() {
  return (
    <>
      <section className='bg-black text-white'>
        <div className='py-5'>
          <div className='pb-10 grid grid-cols-2'>
            <div className=''>
              <h4 className='uppercase pb-2 text-2xl'>Quick Link</h4>
              <ul className='text-xs grid gap-1'>
                <li className=''>Products</li>
                <li className=''>Services</li>
                <li className=''>Health & Safety</li>
                <li className=''>Industries</li>
                <li className=''>News and Media</li>
                <li className=''>Career</li>
                <li className=''>Contact Us</li>
              </ul>
            </div>

            <div className=''>
              <h4 className='uppercase pb-2 text-2xl'>COMPANY</h4>
              <ul className='text-xs grid gap-1'>
                <li className=''>Privacy Policy</li>
                <li className=''>About</li>
                <li className=''>Terms and Conditions</li>
              </ul>
            </div>
          </div>

          <h3 className='text-6xl uppercase text-center'>Western Belting</h3>
        </div>
      </section>
    </>
  );
}

export default Footer;
