import Switch from '@mui/material/Switch';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ModeEditIcon from '@mui/icons-material/ModeEdit';



export const SelectedMedic = ({user}) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <>
        <h2 className="m-10 uppercase text-lg font-thin">Apto Medico</h2>
        <div className="flex flex-row items-center justify-around rounded-lg mx-10 mb-10">
            <Switch {...label} defaultChecked />
            {user.medic.active ? ( <h1 className='uppercase text-lg font-bold text-green-500'>Activdo</h1>) : ( <h1 className='uppercase text-lg font-bold text-red-500'>Expirado</h1>)}
            <h2 className='uppercase text-md font-bold'>Expiration date: {user.medic.expiration}</h2>
        </div>
        <div className="flex flex-row items-center justify-around rounded-lg mx-10 bg-white">
            <div className="flex flex-row items-center justify-center mx-5 my-10">
                <FolderCopyIcon sx={{fontSize: 50, margin: "0 20px"}}/>
                <h2 className='uppercase text-md font-bold mx-20'>{user.medic.file}</h2>
            </div>
            <div className="flex flex-row items-center justify-center mx-10 my-10">
                <ModeEditIcon sx={{fontSize: 30, margin: "0 20px"}}/>
                <DownloadIcon sx={{fontSize: 30, margin: "0 20px"}}/>
            </div>
        </div>
        <h2 className="m-10 uppercase text-lg font-thin">observaciones</h2>
        <div className="flex flex-row items-start justify-start rounded-lg mx-10 pt-5 bg-white h-96">
            <h2 className='uppercase text-md font-thin item-start mx-10'>{user.medic.description}</h2>
        </div>
        </>
    )
}