import { NewPayment, StyledH2 } from './StyledComponents'
import PaymentIcon from '@mui/icons-material/Payment';
import { useState } from 'react';

export const SelectedPayment = ({ user }) => {

    const [data, setData] = useState(true)

    const handlePayments = () => setData(true)
    const handleMemberships = () => setData(false)
    

    return (
        <>
        <div className="flex flex-row items-center justify-between">
            <div className='flex flex-row items-center justify-center'>
            <h2
            className={`cursor-pointer ${data ? "mx-10 uppercase text-2xl font-thin" : "mx-10 uppercase text-md font-bold text-cyan-600"}`}
            onClick={() => handlePayments()}
            >Pagos</h2>
            <h2
            onClick={() => handleMemberships()}
            className={`cursor-pointer ${data ? "m-10 uppercase text-md font-bold text-cyan-600" : "m-10 uppercase text-2xl font-thin"}`}
            >Asociaciones</h2>
            </div>
            <NewPayment sx={{marginRight: 10}}>
                <StyledH2>Realizar pago</StyledH2>
                <PaymentIcon />
            </NewPayment>
        </div>
        {data ? (
            <>
        
        <div className='grid grid-flow-col auto-cols-max xl:gap-x-10 lg:gap-x-5 uppercase text-sm mx-10 pb-5'>
            <h2 className=' text-orange-400 lg:w-40 2xl:w-[40vh] 3xl:w-[50vh]'>Name</h2>
            <h2 className='lg:w-40 2xl:w-[20vh] 3xl:w-[30vh]'>Cupon</h2>
            <h2 className='lg:w-40 2xl:w-[10vh]'>Fecha</h2>
            <h2 className='lg:w-60 2xl:w-[25vh] 3xl:w-[35vh]'>Detalles</h2>
            <h2 className='lg:w-20 2xl:w-[10vh]'>Status</h2>
            <h2 className='lg:w-20 2xl:w-[10vh]'>Membresia</h2>
            <h2 className='lg:w-20 2xl:w-[10vh]'>vencimiento</h2>
        </div>
        {user.payments.map(payment => (
            <>
            <div className='grid grid-flow-col auto-cols-max xl:gap-x-10 lg:gap-x-5 uppercase text-sm my-5 mx-10 border-b-2 pb-5 border-zinc-300'>
                <h2 className='font-normal text-base lg:w-40 2xl:w-[40vh] 3xl:w-[50vh]'>{user.fullName}</h2>
                <h2 className='font-thin text-base lg:w-40 2xl:w-[20vh] 3xl:w-[30vh]'>{payment.cupon}</h2>
                <h2 className='font-thin text-base lg:w-40 2xl:w-[10vh]'>{payment.date}</h2>
                <h2 className='font-thin text-base lg:w-60 2xl:w-[25vh] 3xl:w-[35vh]'>{payment.details}</h2>
                <h2 className={`font-bold text-sm lg:w-20 2xl:w-[10vh] ${payment.status ? "text-green-400" : "text-red-300"}`}>{payment.status ? "Aprobado" : "Rechazado"}</h2>
                <h2 className='font-thin text-base lg:w-20 2xl:w-[10vh] '>{payment.membership}</h2>
                <h2 className='font-thin text-base lg:w-20 2xl:w-[10vh] '>{payment.expiration}</h2>
            </div>
            </>
        ))}
        </>
        ) : (
            <>
            <div className='grid grid-flow-col auto-cols-max gap-x-5 uppercase text-sm mx-10 pb-5'>
            <h2 className=' text-orange-400 lg:w-80 xlg:w-[40vh] 2xl:w-[40vh] 3xl:w-[60vh]'>Name</h2>
            <h2 className='lg:w-40 xlg:w-[40vh] 2xl:w-[28vh]'>Fecha</h2>
            <h2 className='lg:w-40  xlg:w-[15vh] 2xl:w-[28vh]'>Status</h2>
            <h2 className='lg:w-40  xlg:w-[15vh] 2xl:w-[28vh]'>Membresia</h2>
            <h2 className='lg:w-40  xlg:w-[15vh] 2xl:w-[28vh]'>vencimiento</h2>
            </div>
            {user.payments.map(payment => (
            <>
            <div className='grid grid-flow-col auto-cols-max gap-x-5 uppercase text-sm my-5 mx-10 border-b-2 pb-5 border-zinc-300'>
            <h2 className='font-normal text-base lg:w-80 xlg:w-[40vh] 2xl:w-[40vh] 3xl:w-[60vh]'>{user.fullName}</h2>
                <h2 className='font-thin text-base lg:w-40  xlg:w-[40vh] 2xl:w-[28vh]'>{payment.date}</h2>
                <h2 className={`font-bold text-sm lg:w-40 xlg:w-[15vh] 2xl:w-[28vh] ${payment.status ? "text-green-400" : "text-red-300"}`}>{payment.status ? "Aprobado" : "Rechazado"}</h2>
                <h2 className='font-thin text-base lg:w-40 xlg:w-[15vh] 2xl:w-[28vh] '>{payment.membership}</h2>
                <h2 className='font-thin text-base lg:w-40 xlg:w-[15vh] 2xl:w-[28vh] '>{payment.expiration}</h2>
            </div>
            </>
        ))}
            </>
        )}
        </>
    )
}