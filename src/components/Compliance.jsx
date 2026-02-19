import { useEffect, useRef } from "react";

const images = [
  "https://veriforce.com/wp-content/themes/wp-veriforce/assets/images/veriforce-light.svg",
  "https://cdn.prod.website-files.com/65268ba90e8542d639bff011/652804e8fb9b5d8958034508_1-Avetta-PrimaryLogo%201%20(1).svg",
  "https://www.isnetworld.com/themes/custom/isn/logo.png",
  "https://static.wixstatic.com/media/2b8fca_6446378c3af946c7b707c5e78543ede8~mv2.jpg/v1/crop/x_0,y_0,w_272,h_57/fill/w_381,h_78,al_c,lg_1,q_80,enc_auto/logo%2520Cognibox_edited.jpg",
  "https://mltgroup-conveyor.com/sites/default/files/mlt_logo/logo_mlt-group-cse_white.png",
];

function Compliance() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animationFrame;
    let position = 0;

    const speed = 0.5; // adjust for faster/slower movement

    const animate = () => {
      position -= speed;

      // Reset when half scrolled (because images are duplicated)
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className='w-full overflow-hidden py-6'>
      <div ref={trackRef} className='flex w-max gap-6 will-change-transform'>
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className='w-64 h-15  object-cover shrink-0 rounded-xl overflow-hidden'
          >
            <img src={img} alt='' className='w-full h-full object-cover' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Compliance;
