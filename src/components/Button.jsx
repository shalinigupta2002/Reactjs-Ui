import { BsArrowReturnRight } from "react-icons/bs";
const Button = () => {
  return (
    <div className="min-w-40 px-4 py-2 text-black bg-zinc-100 flex rounded-full items-center justify-between ">
      <span className="text-sm font-medium">Get Started</span>
      <BsArrowReturnRight />
    </div>
  )
}

export default Button
