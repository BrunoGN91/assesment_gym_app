import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { useNavigate } from 'react-router-dom'
import Logo from '../../logos/weight.png'


export const Home = () => {

    const navigate = useNavigate()

    return(
        <>
        <Header />
        <div className="flex flex-col items-center justify-center mt-20 pb-40">
        <img className="w-60"src={Logo} alt="" />
        <h2 className="uppercase text-4xl font-thin">Welcome to Gymstats</h2>
        <h2 
        onClick={() => navigate('/clients',{replace: true})}
        className="uppercase text-2xl font-bold mt-5 hover:text-orange-400 cursor-pointer">Go to clients</h2>
        </div>
        <Footer />
        </>
    )
}