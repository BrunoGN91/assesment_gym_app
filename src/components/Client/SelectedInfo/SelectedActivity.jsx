import Asset from "../../../logos/Asset 1.png"
import Asset2 from "../../../logos/Asset 2.png"


export const SelectedActivity = ({user}) => {

    

    return (
        <>
            <h2 className="m-10 uppercase text-lg font-thin">Actividad</h2>
            <div className="flex flex-row items-center justify-around mb-10">
            <div className="flex flex-row items-center justify-around">
                <img className="w-full"src={Asset} alt="" />
                <div className="flex flex-col ml-20">
                    <h2>Microcentro</h2>
                    <h2>Belgrano</h2>
                    <h2>Pilar</h2>
                    <h2>Caballito</h2>
                </div>
            </div>
            <div className="flex flex-row items-center justify-around">
                <img className="w-full"src={Asset2} alt="" />
                <div className="flex flex-col ml-20">
                    <h2>Musculación</h2>
                    <h2>Indoor</h2>
                </div>
            </div>
            </div>
                {user && user.frequency.map(item => {
                    return (
                        <div className="flex flex-row font-sans items-center justify-between p-10 mx-10 my-5 bg-slate-100 rounded-lg">
                            <h2>{item.date}</h2>
                            <h2>{item.location}</h2>
                            <h2>{item.excercises}</h2>
                        </div>
                    )})}
            </>
    )
}