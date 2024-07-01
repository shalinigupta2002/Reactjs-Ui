import { BsArrowReturnRight } from "react-icons/bs";
const Button = ({title ="Get Started"}) => {
  return (
    <div className="max-w-40 px-4 py-2 text-black bg-zinc-100 flex rounded-full items-center justify-between gap-3">
      <span className="text-sm font-medium">{title}</span>
      <BsArrowReturnRight />
    </div>
  )
}

export default Button
