import Switch from '@mui/material/Switch';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ModeEditIcon from '@mui/icons-material/ModeEdit';



export const SelectedMedic = ({user}) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <>
        <h2 className="m-10 uppercase text-2xl font-thin">Apto Médico</h2>
        <div className="flex flex-row items-center justify-around rounded-lg mx-10 mb-10">
            <div className="flex flex-row items-center justify-center">
            <Switch {...label} defaultChecked />
            {user.medic.active ? ( <h1 className='uppercase ml-20 text-3xl font-bold text-green-500'>Activdo</h1>) : ( <h1 className='uppercase text-lg font-bold text-red-500'>Expirado</h1>)}
            </div>
            <h2 className='uppercase text-lg font-normal'>Expiration date: {user.medic.expiration}</h2>
        </div>
        <div className="flex flex-row items-center justify-around rounded-lg mx-10 bg-white shadow-xl">
            <div className="flex flex-row items-center justify-center mx-5 my-10">
                <FolderCopyIcon sx={{fontSize: 50, margin: "0 20px"}}/>
                <h2 className='uppercase text-md font-bold mx-20'>{user.medic.file}</h2>
            </div>
            <div className="flex flex-row items-center justify-center mx-10 my-10">
                <ModeEditIcon sx={{fontSize: 30, margin: "0 20px", cursor: "pointer"}}/>
                <DownloadIcon sx={{fontSize: 30, margin: "0 20px", cursor: "pointer"}}/>
            </div>
        </div>
        <h2 className="m-10 uppercase text-lg font-thin">observaciones</h2>
        <div className="flex flex-row items-start justify-start shadow-2xl rounded-lg mb-10 mx-10 pt-5 bg-white h-96">
            <h2 className='uppercase text-md font-thin item-start mx-10'>{user.medic.description}</h2>
        </div>
        </>
    )
}