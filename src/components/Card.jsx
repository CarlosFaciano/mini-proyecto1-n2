export default function Card({ rating, title, photo, beds, type, superHost }) {
    return (
        <section className=" m-4 mb-10   md:w-[40%] lg:w-1/4  sm:w-11/12">
            <div className="w-full h-full">
                <figure className=" ">
                    <img className="w-full object-cover  rounded-lg lg:max-h-[260.4px] md:max-h-80" src={photo} alt="" />
                </figure>
                <div className="flex align-bottom justify-between items mt-2">
                    {
                        superHost !== false &&
                            <div>
                                <h1 className="border shadow-md font-bold border-black text-sm rounded-xl p-2">SUPERHOST</h1>
                            </div>
                    }
                    <h1 className="text-gray-500">{type}: Beds {beds !== null ? beds : ""}</h1>

                    <figure className="flex gap-x-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M12 2l2.9 8.7h9.1l-7.3 5.3 2.8 8.7L12 18.3l-7.3 5.3 2.8-8.7L0 10.7h9.1L12 2z" fill="#eb5757" stroke="#eb5757" strokeWidth="0.5" />
                            <path d="M12 1.5c.1 0 .2 0 .3.1l2.9 8.7h9.1c.3 0 .4.4.1.5l-7.3 5.3c-.1.1-.2.3-.1.5l2.8 8.7c.1.3-.2.5-.4.3L12 18.3c-.2-.1-.4-.1-.6 0l-7.3 5.3c-.2.2-.5 0-.4-.3l2.8-8.7c.1-.2 0-.4-.1-.5L0 10.7c-.3 0-.4-.4-.1-.5h9.1L12 1.5z" fill="#eb5757" stroke="#eb5757" strokeWidth="0.5" />
                        </svg>
                        <h2 className="font-bold">{rating}</h2>
                    </figure>
                </div>
                <h1 className="font-bold">{title}</h1>
            </div>
        </section>

    )
}