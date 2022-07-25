import Switch from '@mui/material/Switch';
import PrintIcon from '@mui/icons-material/Print';
import { ShadowBoxCol } from './StyledComponents'
import { useState} from 'react'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const SelectedTools = ({ user }) => {

    const [baja, setBaja] = useState(false)


    return (
        <>
        <h2 className="m-10 uppercase text-2xl font-thin">Herramientas</h2>
        <ShadowBoxCol>
            <div className='my-5 flex flex-row items-center uppercase text-lg justify-between w-11/12'>
                <div className='flex flex-row items-center justify-start'>
                <h2 className="mx-20">Dar de baja al cliente</h2>
                <h2 className="font-thin text-xs">Una vez dado de baja puede ser dado de alta nuevamente</h2>
                {baja && ( <h2 className='mx-20 text-red-300 font-normal text-lg'>Cliente inactivo</h2>)}
                </div>
                <Switch onClick={() => setBaja(!baja)}{...label} defaultChecked/>
            </div>
            <div className='py-5 border-t-2 flex flex-row items-center uppercase text-lg justify-between w-11/12'>
                <h2 className="mx-20 font-thin text-lg">Membresia: </h2>
                <h2 className=" font-thin text-lg">{user.membership}</h2>
            </div>
            <div className='py-5 flex border-t-2 flex-row items-center uppercase text-lg justify-between w-11/12'>
                
                <h2 className="mx-20 font-thin text-lg">imprimir ficha del cliente</h2>
                <PrintIcon sx={{fontSize: 40}}/>
            </div>
        </ShadowBoxCol>
        </>
    )
}