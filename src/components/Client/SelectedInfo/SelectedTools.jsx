import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const SelectedTools = ({ user }) => {


    return (
        <>
        <div className="flex flex-col items-center justify-center my-20 w-full">
            <div className='flex flex-row items-center py-5 uppercase text-lg justify-center w-11/12 bg-slate-100 rounded-md'>
                <Switch {...label} defaultChecked />
                <h2 className="mx-20">Estado del plan del cliente</h2>
                <h2 className="text-green-300">{user.membership && "Activado"}</h2>
            </div>
        </div>
        </>
    )
}