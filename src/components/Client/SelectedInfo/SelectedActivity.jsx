import Asset from "../../../logos/Asset 1.png"
import Asset2 from "../../../logos/Asset 2.png"


export const SelectedActivity = ({user}) => {

    

    return (
        <>
            <h2 className="m-10 uppercase text-lg font-thin">Actividad</h2>
            <div className="flex flex-row items-center justify-around mb-20">
            <div className="flex flex-row items-center justify-around">
                <img className="w-full"src={Asset} alt="" />
              
            </div>
            <div className="flex flex-row items-center justify-around">
                <img className="w-full"src={Asset2} alt="" />
               
            </div>
            </div>
                {user && user.frequency.map(item => {
                    return (
                        <div className="flex flex-row font-sans items-center justify-between p-5 mx-10 my-2 bg-slate-100 rounded-lg">
                            <h2 className="uppercase font-normal text-base">Ingreso: {item.date}</h2>
                            <h2 className="uppercase font-normal text-base">Sede: {item.location}</h2>
                            <h2 className="uppercase font-normal text-base">Actividad: {item.excercises}</h2>
                        </div>
                    )})}
            </>
    )
}