

import { GoArrowRight } from "react-icons/go";
function Card({Width,start,para}) {
    
  return (
    <div className={` bg-zinc-800 p-5 min-h-[30rem]  min-w-[20rem] ${Width} hover:bg-purple-600 flex flex-col justify-between rounded-xl `}>
        <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <h3>one heading</h3>
        <GoArrowRight />
</div> 
<h1 className="text-3xl font-medium mt-10">ehete.</h1>
   </div>
  <div className="down w-full ">
    {
        start === true ?(
          <>
           <h1 className="text-6xl font-semibold tracking-tighter leading-none">
   start a project </h1>
   <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-100" >contact us</button>
          </>
        ) : null
    }
   {para && (<p className="text-sm text-zinc-500 font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto, expedita </p>)}
  
  </div>
   </div>
  )
}

export default Card

