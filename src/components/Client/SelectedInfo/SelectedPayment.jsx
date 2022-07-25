import { NewPayment, StyledH2 } from './StyledComponents'
import PaymentIcon from '@mui/icons-material/Payment';
import { useState } from 'react';

export const SelectedPayment = ({ user }) => {

    const [data, setData] = useState(true)

    const handlePayments = () => setData(true)
    const handleMemberships = () => setData(false)
    

    return (
        <>
        <div className="flex flex-row items-center justify-start">
            <h2
            className={`cursor-pointer ${data ? "mx-10 uppercase text-2xl font-bold" : "mx-10 uppercase text-md font-bold text-cyan-600"}`}
            onClick={() => handlePayments()}
            >Pagos</h2>
            <h2
            onClick={() => handleMemberships()}
            className={`cursor-pointer ${data ? "m-10 uppercase text-md font-bold text-cyan-600" : "m-10 uppercase text-2xl font-bold"}`}>Asociaciones</h2>
            <NewPayment>
                <StyledH2>Realizar pago</StyledH2>
                <PaymentIcon />
            </NewPayment>
        </div>
        {data ? (
            <>
        
        <div className='grid grid-flow-col auto-cols-max gap-x-5 uppercase text-sm mx-10 pb-5'>
            <h2 className=' text-orange-400 w-40 lg:w-80'>Name</h2>
            <h2 className='w-40 lg:w-80'>Cupon</h2>
            <h2 className='w-40 lg:w-80'>Fecha</h2>
            <h2 className='w-60 lg:w-100'>Detalles</h2>
            <h2 className='w-20 lg:w-[7.5rem]'>Status</h2>
            <h2 className='w-20 lg:w-[7.5rem]'>Membresia</h2>
            <h2 className='w-20 lg:w-[7.5rem]'>vencimiento</h2>
        </div>
        {user.payments.map(payment => (
            <>
            <div className='grid grid-flow-col auto-cols-max gap-x-5 uppercase text-sm my-5 mx-10 border-b-2 pb-5 border-zinc-300'>
                <h2 className='font-normal text-base w-40 lg:w-80'>{user.fullName}</h2>
                <h2 className='font-thin text-base w-40 lg:w-80'>{payment.cupon}</h2>
                <h2 className='font-thin text-base w-40 lg:w-80'>{payment.date}</h2>
                <h2 className='font-thin text-base w-60 lg:w-100'>{payment.details}</h2>
                <h2 className={`font-bold text-sm w-20 lg:w-[7.5rem] ${payment.status ? "text-green-400" : "text-red-300"}`}>{payment.status ? "Aprobado" : "Rechazado"}</h2>
                <h2 className='font-thin text-base w-20 lg:w-[7.5rem]'>{payment.membership}</h2>
                <h2 className='font-thin text-base w-20 lg:w-[7.5rem]'>{payment.expiration}</h2>
            </div>
            </>
        ))}
        </>
        ) : (
            <>
            <div className='grid grid-flow-col auto-cols-max gap-x-5 uppercase text-sm mx-10 pb-5'>
                <h2 className=' text-orange-400 w-40'>Name</h2>
                <h2 className='w-80'>Fecha de pago</h2>
                <h2 className='w-80'>Status</h2>
                <h2 className='w-40'>Membresia</h2>
                <h2 className='w-40'>vencimiento</h2>
            </div>
            {user.payments.map(payment => (
            <>
            <div className='grid grid-flow-col auto-cols-max gap-x-5 uppercase text-sm my-5 mx-10 border-b-2 pb-5 border-zinc-300'>
                <h2 className='font-normal text-base w-40'>{user.fullName}</h2>
                <h2 className='font-thin text-base w-80'>{payment.date}</h2>
                <h2 className={`font-bold text-sm w-80 ${payment.status ? "text-green-400" : "text-red-300"}`}>{payment.status ? "Aprobado" : "Rechazado"}</h2>
                <h2 className='font-thin text-base w-40'>{payment.membership}</h2>
                <h2 className='font-thin text-base w-40'>{payment.expiration}</h2>
            </div>
            </>
        ))}
            </>
        )}
        </>
    )
}