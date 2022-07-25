import { Header } from "../Header/Header"
import { useNavigate} from 'react-router-dom'
import ConstructionIcon from '@mui/icons-material/Construction';

export const Error404 = () => {

    const navigate = useNavigate()

    return (
        <>
        <Header />
        <div className="flex flex-col w-full justify-center items-center mt-20">
        <h2 className="uppercase text-2xl font-thin tracking-wide">
            Estamos construyendo para brindarte un mejor servicio!</h2>
        <ConstructionIcon sx={{fontSize: 350, color: "#F2AB4C"}}/>
        <h2 className="cursor-pointer uppercase text-2xl font-bold hover:text-orange-400 text-black"
        onClick={() => navigate('/clients')}>
            Volver a clientes</h2>
        </div>
        </>
    )
}