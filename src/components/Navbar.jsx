import Button from "./Button"

//div bada cheez ko banaane ke liye istemaal hota hai aur span chotta ke liye use hota hai
const Navbar = () => {
  return (
    <div className="px-3 max-w-screen-xl mx-auto py-6 bg-zinc-800 flex items-center justify-between border-b-[1px] border-zinc-700">
   <div className="nleft flex items-center">
   <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt=""></img>
      <div className="links flex gap-14 ml-20">
        {["Home", "Work","culture","", "News "].map((elem,index)=> (
        elem.length === 0 ? <span key="index" className="w-0.5 h-7 bg-zinc-700"></span>:<a key="index" className="text-sm flex gap-1  items-center" href="#" > 
           {index === 1 && ( <span style={{boxShadow:"0 0 0.25em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>)}
        {elem}
        </a>
   ) )}
 </div>
    </div>
    <Button />
    </div>
  )
}

export default Navbar
