import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "gsap/all";
import heroImg from "../assets/images/heroImg.jpg";

function Hero() {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.from(".hero-description", {
      opacity: 0,
      y: 0,
      ease: "power3.inOut",
    }).from(
      titleSplit.chars,
      {
        opacity: 0,
        yPercent: 200,
        stagger: 0.02,
        ease: "power1.out",
      },
      "-=1"
    );
  });

  return (
    <>
      <section className='py-20'>
        <div className=''>
          <div className='pb-10 px-3'>
            <h1 className='pt-10 text-8xl uppercase overflow-hidden hero-title'>
              Western <br /> Belting
            </h1>
            <p className='py-5 text-xs hero-description'>
              Employee-owned expertise you can depend on for installation,
              repair, and maintenance of industrial conveyor systems across BC
              and beyond.
            </p>

            <button className='bg-black text-xs text-white px-7 py-2 rounded-sm uppercase flex justify-between items-center'>
              <span className=''>contact us</span>
            </button>
          </div>

          <div className='px-3'>
            <img src={heroImg} alt='' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
