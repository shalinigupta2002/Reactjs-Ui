
// // import { useState } from 'react';
// // import Product from './Product'
// // import { motion } from "framer-motion"

// // function Products() {
// //     var products = [
// //         { title: "Arquitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false,videoSrc: "/Videos/Arquitel.webm", },
// //         { title: "cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false,videoSrc: "/Videos/Candid.webm" },
// //         { title: "Layout Land", description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live: true, case: false },
// //         { title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: true },
// //         { title: "Maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true },
// //         { title: "Singularity", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true },
// //         { title: "Like Magic", description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", live: true, case: true },
// //         { title: "Silvr", description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live: true, case: true },
// //         { title: "Rainfall", description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: true },
// //         { title: "Intenseye", description: "A brand new website for Intenseye just before their $64M Series.", live: true, case: true },
// //         { title: "Remind", description: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live: true, case: true },
// //         { title: "Summon", description: "  We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.", live: true, case: true },
// //         { title: "Jungle", description: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.", live: true, case: true },
// //         { title: "Candid Health", description: "A complete redesign of a health-startup website, followed by cutting edge development.", live: true, case: true },
// //         { title: "Yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true },
// //         { title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true },
// //         { title: "Showcase", description: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.", live: true, case: true },
// //         { title: "Weglot", description: "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.", live: true, case: true },
// //         { title: "RocketChaat", description: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.", live: true, case: true },
// //     ];

// //     const [pos, setPos] =useState(0)
// //     const mover = (val) => {
// //         setPos(val*23)
// //     }
// //     return (
// //         <div className='mt-32 relative '>
// //             {products.map((val, index) => (
// //                 <Product val={val} mover={mover} count={index} key={index} videoSrc={val.videoSrc}/>
           
// //             ))}
// //         <div className='absolute top-0 pointer-events-none w-full h-full '>
// //             <motion.div 
// //               initial={{y:pos, x:"-50%"}}
// //                animate={{y:pos +`rem`}}  
// //                transition={{ease:[0.76,0,0.24,1],duration:.6}}       
            
// //             className='window absolute bg-sky-100 w-[32rem] h-[23rem] left-[44%]   overflow-hidden'>
    
// //             <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className='window  bg-sky-200 w-full h-full  '>
// //             {/* <Product title={products[0].title} description={products[0].description} live= {products[0].live} CASE= {products[0].case} mover={mover} count={0} videoSrc={products[0].videoSrc }/>
// //              */}
// //             </motion.div>
// //             <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className='window  bg-sky-300 w-full h-full '>videoSrc</motion.div>
// //             <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className='window  bg-sky-100 w-full h-full '></motion.div>
// //             <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className='window  bg-sky-100 w-full h-full '></motion.div>
// //             <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}}  className='window  bg-sky-100 w-full h-full '>
// //             </motion.div>
           
// // </motion.div>
        
// //         </div>
// //         </div>

// //     );
// // }

// // export default Products;


// import { useState } from 'react';
// import Product from './Product';
// import { motion } from "framer-motion";

// function Products() {
//     var products = [
//         { title: "Arquitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false, videoSrc: "/Videos/Arquitel.webm" },
//         // { title: "cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false },
//         { title: "Layout Land", description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live: true, case: false, videoSrc: "/Videos/webflow.webm"},
//         // { title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: true },
//         // { title: "Maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true },
//         { title: "Singularity", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true,videoSrc: "/Videos/singularity.webm"},
//         { title: "Like Magic", description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", live: true, case: true,videoSrc: "/Videos/weglot.webm" },
//         { title: "Silvr", description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live: true, case: true ,videoSrc: "/Videos/silvr.webm"},
//         { title: "Rainfall", description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: true,videoSrc: "/Videos/rainfall.webm" },
//         { title: "Intenseye", description: "A brand new website for Intenseye just before their $64M Series.", live: true, case: true,videoSrc: "/Videos/intenseeye.webm" },
//         { title: "Remind", description: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live: true, case: true ,videoSrc: "/Videos/remind.webm"},
//         { title: "Summon", description: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.", live: true, case: true,videoSrc: "/Videos/summon.webm" },
//         { title: "Jungle", description: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.", live: true, case: true,videoSrc: "/Videos/jungle.webm" },
//         { title: "Candid Health", description: "A complete redesign of a health-startup website, followed by cutting edge development.", live: true, case: true,videoSrc: "/Videos/candid.webm" },
//         { title: "Yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true,videoSrc: "/Videos/yahoo.webm" },
//         { title: "YIR 2021", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true,videoSrc: "/Videos/yearn.webm" },
//         { title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true,videoSrc: "/Videos/YIR.webm" },
//         { title: "Showcase", description: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.", live: true, case: true,videoSrc: "/Videos/showcase.webm" },
//         { title: "Weglot", description: "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.", live: true, case: true, videoSrc: "/Videos/weglot.webm"},
//         { title: "RocketChaat", description: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.", live: true, case: true,videoSrc: "/Videos/rocketchat.webm" },
//     ];

//     const [pos, setPos] = useState(0);
//     const mover = (val) => {
//         setPos(val * 23);
//     };

//     return (
//         <div className='mt-32 relative'>
//             {products.map((val, index) => (
//                 <Product val={val} mover={mover} count={index} key={index} videoSrc={val.videoSrc} />
//             ))}
//             <div className='absolute top-0 pointer-events-none w-full h-full'>
//                 <motion.div
//                     initial={{ y: pos, x: "-50%" }}
//                     animate={{ y: pos + `rem` }}
//                     transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
//                     className='window absolute bg-sky-100 w-[32rem] h-[23rem] left-[44%] overflow-hidden'
//                 >
//                     <motion.div
//                         animate={{ y: -pos + `rem` }}
//                         transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
//                         className='window bg-sky-200 w-full h-full flex items-center justify-center'
//                     >
//                         {products[pos / 23]?.videoSrc && (
//                             <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
//                         )}
//                     </motion.div>
//                     <motion.div
//                         animate={{ y: -pos + `rem` }}
//                         transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
//                         className='window bg-sky-300 w-full h-full'
//                     />
//                     <motion.div
//                         animate={{ y: -pos + `rem` }}
//                         transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
//                         className='window bg-sky-100 w-full h-full'
//                     />
//                     <motion.div
//                         animate={{ y: -pos + `rem` }}
//                         transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
//                         className='window bg-sky-100 w-full h-full'
//                     />
//                     <motion.div
//                         animate={{ y: -pos + `rem` }}
//                         transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
//                         className='window bg-sky-100 w-full h-full'
//                     />
//                 </motion.div>
//             </div>
//         </div>
//     );
// }

// export default Products;


import { useState } from 'react';
import Product from './Product';
import { motion } from "framer-motion";

function Products() {
    var products = [
        { title: "Arquitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false, videoSrc: "/Videos/Arquitel.webm" },
        { title: "cula", description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: true, case: false, videoSrc: "/Videos/Cula.webm"},
        { title: "Layout Land", description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live: true, case: false, videoSrc: "/Videos/web.webm" },
        { title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: true, videoSrc: "/Videos/TTR.webm" },
        { title: "Maniv", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true,videoSrc: "/Videos/maniv.webm" },
        { title: "Singularity", description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true, videoSrc: "/Videos/Singularity.webm" },
        { title: "Like Magic", description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", live: true, case: true, videoSrc: "/Videos/weglot.webm" },
        { title: "Silvr", description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live: true, case: true, videoSrc: "/Videos/Silvr.webm" },
        { title: "Rainfall", description: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: true, videoSrc: "/Videos/rainfall.webm" },
        { title: "Intenseye", description: "A brand new website for Intenseye just before their $64M Series.", live: true, case: true, videoSrc: "/Videos/intenseeye.webm" },
        { title: "Remind", description: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live: true, case: true, videoSrc: "/Videos/remind.webm" },
        { title: "Summon", description: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.", live: true, case: true, videoSrc: "/Videos/summon.webm" },
        { title: "Jungle", description: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.", live: true, case: true, videoSrc: "/Videos/jungle.webm" },
        { title: "Candid Health", description: "A complete redesign of a health-startup website, followed by cutting edge development.", live: true, case: true, videoSrc: "/Videos/candid.webm" },
        { title: "Yahoo!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true, videoSrc: "/Videos/yahoo.webm" },
        { title: "YIR 2021", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true, videoSrc: "/Videos/yearn.webm" },
        { title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true, videoSrc: "/Videos/YIR.webm" },
        { title: "Showcase", description: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.", live: true, case: true, videoSrc: "/Videos/showcase.webm" },
        { title: "Weglot", description: "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.", live: true, case: true, videoSrc: "/Videos/weglot.webm" },
        { title: "RocketChaat", description: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.", live: true, case: true, videoSrc: "/Videos/rocketchat.webm" },
    ];

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val * 23);
    };

    return (
        <div className='mt-32 relative'>
            {products.map((val, index) => (
                <Product val={val} mover={mover} count={index} key={index} />
                
            ))}
            <div className='absolute top-0 pointer-events-none w-full h-full'>
                <motion.div
                    initial={{ y: pos, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
                    className='window absolute  w-[32rem] h-[23rem] left-[44%] overflow-hidden'
                >
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0.3, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full flex items-center justify-center'
                    >
                        {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}
                    </motion.div>
                    <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                     <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                         <motion.div
                        animate={{ y: -pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                        className='window  w-full h-full'> {products[pos / 23]?.videoSrc && (
                            <video src={products[pos / 23]?.videoSrc} className="w-full h-full object-cover" autoPlay loop muted />
                        )}</motion.div>
                   
                </motion.div>
            </div>
        </div>
    );
}

export default Products;

