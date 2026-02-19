import React from "react";

function AboutUs() {
  return (
    <>
      <section className='bg-black text-white'>
        <div className='px-3 py-15'>
          <div className='grid gap-10 place-items-center'>
            <div className='grid place-items-center gap-2'>
              <div className='flex gap-1'>
                <h2 className='text-6xl'>65</h2>
                <span>+</span>
              </div>
              <p className='text-xs'>years of experience</p>
            </div>

            <div className='grid place-items-center gap-2'>
              <div className='flex gap-1'>
                <h2 className='text-6xl'>100</h2>
                <span>+</span>
              </div>
              <p className='text-xs'>Employee Owned</p>
            </div>

            <div className='grid place-items-center gap-2'>
              <div className='flex gap-1'>
                <h2 className='text-6xl'>24</h2>
                <span>+</span>
              </div>
              <p className='text-xs'>emergency services</p>
            </div>

            <div className=''>
              <h2 className=''></h2>
              <p className=''></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
