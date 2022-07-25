import Asset from "../../../logos/Asset 1.png"
import Asset2 from "../../../logos/Asset 2.png"


export const SelectedActivity = ({user}) => {

    
     const handleTime = (date) => {
        return new Date(date).toLocaleString('en-EN', { timeZone: 'UTC' })
     }
    
    return (
        <>
            <h2 className="m-10 uppercase text-2xl font-thin">Actividad</h2>
            <div className="flex flex-row items-center justify-around mb-20">
            <div className="flex flex-row items-center justify-around">
                <img className="w-full"src={Asset} alt="" />
              
            </div>
            <div className="flex flex-row items-center justify-around">
                <img className="w-full"src={Asset2} alt="" />
               
            </div>
            </div>
            <div className="flex flex-row font-bold text-sm items-center justify-between px-5 mx-10 my-2">
                            <h2 className="uppercase font-bold text-sm">Ingreso</h2>
                            <h2 className="uppercase font-bold text-sm">Sede</h2>
                            <h2 className="uppercase font-bold text-sm">Actividad</h2>
                        </div>
                {user && user.frequency.map(item => {
                    return (
                        <div className="flex flex-row shadow-xl font-sans items-center justify-between p-5 mx-10 my-2 bg-slate-100 rounded-lg">
                            <h2 className="uppercase font-thin text-lg">{handleTime(item.date)}</h2>
                            <h2 className="uppercase font-thin text-lg">{item.location}</h2>
                            <h2 className="uppercase font-thin text-lg">{item.excercises}</h2>
                        </div>
                    )})}
            </>
    )
}