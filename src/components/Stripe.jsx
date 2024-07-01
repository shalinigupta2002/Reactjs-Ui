
function Stripe({ data }) {
    // Ensure data is defined before accessing its properties
    if (!data) {
        return null; // Or handle the case where data is undefined
    }

    return (
        <div className="min-w-72 mt-20 px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex justify-between items-center">
            <img src={data.url} alt="" />
            <span className="font-semibold">{data.number}</span>
        </div>
    );
}

export default Stripe;

