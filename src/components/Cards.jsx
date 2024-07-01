import Card from "./Card"


function Cards() {
  return (
    <div className="w-full">
        <div className=" flex object-center max-w-screen-lg mx-auto gap-1 py-20 ">
            <Card width={"basis-2/3"} start={false} para={true}/>
            <Card width={"basis-1/3"} start={true} para={false} hover={"bg-purple-500"}/>
        </div>
      
    </div>
  )
}

export default Cards

