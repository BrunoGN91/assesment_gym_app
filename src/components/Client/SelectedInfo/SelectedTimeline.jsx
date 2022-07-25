import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


export const SelectedTimeline = ({ user }) => {

    return (
        <>
        <h2 className="m-10 uppercase text-lg font-normal">LiNeA De TiEmPo</h2>
        <div className='flex flex-col items-start justify-center w-full'>
            <div className='flex flex-row items-center justify-between ml-20 mb-10 w-11/12'>
                <SettingsIcon sx={{ fontSize: 50, marginRight: "40px"}}/>
                <div className="flex flex-row font-sans items-center uppercase w-11/12 font-thin text-lg justify-between p-5 mr-10 my-2 bg-slate-100 rounded-lg">
                    <h2>Tony Stark arreglo el nombre</h2>
                    <h2>Actualizado: 18/20/2022</h2>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between ml-20 mb-10 w-11/12 '>
                <PaymentIcon sx={{ fontSize: 50, marginRight: "40px"}}/>
                <div className="flex flex-row font-sans items-center uppercase w-11/12 font-thin text-lg justify-between p-5 mr-10 my-2 bg-slate-100 rounded-lg">
                    <h2>Tony Stark actualizo los detalles de la tarjeta</h2>
                    <h2>Actualizado: 18/20/2022</h2>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between ml-20 w-11/12 mb-10'>
                <PaymentIcon sx={{ fontSize: 50, marginRight: "40px"}}/>
                <div className="flex flex-row font-sans items-center uppercase w-11/12 font-thin text-lg justify-between p-5 mr-10 my-2 bg-slate-100 rounded-lg">
                    <h2>Tony Stark cobro el pago de la membresia</h2>
                    <h2>Actualizado: 18/20/2022</h2>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between ml-20 w-11/12 mb-10'>
                <LocalHospitalIcon sx={{ fontSize: 50, marginRight: "40px"}}/>
                <div className="flex flex-row font-sans items-center uppercase w-11/12 font-thin text-lg justify-between p-5 mr-10 my-2 bg-slate-100 rounded-lg">
                    <h2>Steve Rodgers dió de alta al cliente</h2>
                    <h2>Actualizado: 18/20/2022</h2>
                </div>
            </div>
        </div>
        </>
    )
}