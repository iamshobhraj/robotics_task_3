export default function Cards({card}) {
    return(
        <div className={`flex flex-col gap-1 p-6 pb-2 bg-white rounded`}>
            <div className={`h-52 overflow-hidden`}><img src={card.image} alt={"image"} className={`w-full h-full hover:scale-125 transition duration-1000`}/></div>
            <div className={`flex gap-2`}>
                <div className={`flex flex-col bg-green-600 p-2 align-top h-6 pt-0`}>{card.id}</div>
                <div className={`text-center flex-1`}>
                    <p className={`text-xl font-medium break-words leading-6`}>{card.name}</p>
                    <p>{card.location}</p>
                </div>
            </div>
            <div className={`text-start pt-2 text-gray-500 font-medium`}>
                <span>{card.speciality}</span>
            </div>
            <div className={`leading-5 font-medium border-t-[1px] border-gray-400`}>
                <p>{card.description}</p>
            </div>
        </div>
    )
}