
// import Button from './Button'

// function Product({ title, description ,live , CASE , mover , count ,videoSrc,val }) {
//   if (!val) {
//     return null; // Or return some fallback UI
//   }

//   return (
//     <div className='w-full py-20 h-[23rem] text-white '>
//       <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
//         <h1 className='text-6xl capitalize font-semibold'>{val.title}</h1>
//         <div className='dets w-1/3'>
//           <p className='mb-5'>{val.description}</p>
//           <video src={videoSrc} className="w-full h-full object-cover flex object-center mt-4" />
//          <div className='flex items-center gap-4'>
//           {val.live && <Button />}
//           {val.case && <Button title= "case study"/>}
//          </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Product

import Button from './Button';

function Product({ val, mover, count }) {
    if (!val) {
        return null;
    }

    return (
        <div className='w-full py-20 h-[23rem] text-white'>
            <div onMouseEnter={() => { mover(count) }} className='max-w-screen-xl mx-auto flex items-center justify-between'>
                <h1 className='text-6xl capitalize font-semibold'>{val.title}</h1>
                <div className='dets w-1/3'>
                    <p className='mb-5'>{val.description}</p>
                    
                   
                    <div className='flex items-center gap-4'>
                        {val.live && <Button />}
                        {val.case && <Button title="case study" />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
