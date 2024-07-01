
// function Marquee({ imagesurls }) {
//   return (
//     <div className="flex w-full overflow-hidden">
//         <div className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
//            {imagesurls.map((url, index) => (
//               <img key={index} src={url} alt="" className="h-[200px] w-[200px] object-cover" />
//             ))}
  
//       </div>
//       <div className="flex w-full overflow-hidden">
//         <div className="flex flex-shrink-0 gap-40 py-10 pr-40 ">
//            {imagesurls.map((url, index) => (
//               <img key={index} src={url} alt="" className="h-[200px] w-[200px] object-cover" />
//             ))}
//   </div>
//       </div>
//     </div>
//   )
// }

// export default Marquee
import { useEffect, useRef } from 'react';
import {motion} from "framer-motion";
function Marquee({ imagesurls = [] }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let start = null;
    let scrollLeft = 0;

    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      scrollLeft -= 1;
      if (scrollLeft <= -marquee.scrollWidth / 2) {
        scrollLeft = 0;
      }
      marquee.scrollLeft = scrollLeft;
      window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(step);
  }, []);

  return (
    <motion.div className="w-full overflow-hidden" ref={marqueeRef}>
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition = {{ease: "linear", duration:10, repeat: Infinity}}className="flex" style={{ width: '200%' }}>
        {imagesurls.concat(imagesurls).map((url, index) => (
          <img key={index} src={url} alt="" className=" flex flex-shrink-0 gap-40 py-10 pr-40 " />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Marquee;
