import { NewPayment, StyledH2 } from './StyledComponents'
import PaymentIcon from '@mui/icons-material/Payment';

export const SelectedPayment = ({ user }) => {
    return (
        <>
        <div className="flex flex-row items-center justify-start">
            <h2 className="m-10 uppercase text-2xl font-bold">Pagos</h2>
            <h2 className="mx-10 uppercase text-md font-bold text-cyan-600">Asociaciones</h2>
            <NewPayment>
                <StyledH2>Realizar pago</StyledH2>
                <PaymentIcon />
            </NewPayment>
        </div>

        <div className='grid grid-flow-col auto-cols-max gap-x-5 uppercase text-sm w-full ml-20'>
            <h2 className='w-40'>Name</h2>
            <h2 className='w-40'>Cupon</h2>
            <h2 className='w-20'>Fecha</h2>
            <h2 className='w-60'>Detalles</h2>
            <h2 className='w-15'>Status</h2>
            <h2 className='w-20'>Membresia</h2>
            <h2 className='w-20'>vencimiento</h2>
        </div>
        {user.payments.map(payment => {(
            <div className='grid grid-flow-col auto-cols-max gap-x-5 uppercase text-sm w-full ml-20'>
                <h2 className='w-40'>{user.fullName}</h2>
                <h2 className='w-40'>Cupon</h2>
                <h2 className='w-20'>Fecha</h2>
                <h2 className='w-60'>Detalles</h2>
                <h2 className='w-15'>Status</h2>
                <h2 className='w-20'>Membresia</h2>
                <h2 className='w-20'>vencimiento</h2>
            </div>
        )})}
        </>
    )
}