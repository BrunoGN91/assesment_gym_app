import {useEffect, useState} from "react"

import { DATA_CLIENTS } from "../Data/data";

import { Header } from './../Header/Header'
import { Footer } from "../Footer/Footer";

import { useParams, useNavigate } from 'react-router-dom'
import { SelectedActivity } from "./SelectedInfo/SelectedActivity";
import { SelectedMedic } from './SelectedInfo/SelectedMedic'
import { SelectedPayment } from "./SelectedInfo/SelectedPayment";
import { SelectedTimeline } from "./SelectedInfo/SelectedTimeline";
import { SelectedTools } from "./SelectedInfo/SelectedTools";

import { Spinner } from "../Spinner/Spinner";
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import {
    BackClients,
    StyledH2,
    ClientDataSection,
    StyledH1,
    StyledH3,
    DataSection,
    Modal,
    Exit,
    BackgroundModal,
    Edit,
    Remove
} from './StyledClient'

export const Client = () => {

    const [selectedData, setSelectedData] = useState("")
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [edit, setEdit] = useState(false)
    const [image, setImage] = useState(false)

    const {id} = useParams()
    const navigate = useNavigate()

    const handleBack = () => navigate('/clients', {replace: true})
    const handleEdit = () => setEdit(!edit)

    useEffect(() => {
        setUser(DATA_CLIENTS[id])
        setSelectedData("activity")
    },[])

    const handleSelectedInfo = (e) => {
        setLoading(true)
        setSelectedData(e)
        setTimeout(() => {
            setLoading(false)
        }, 1400)
    }

    const handleImage = () => setImage(true)
    const handleImageExit = () => setImage(false)

    

    return(
        <>
        <Header />
        <BackClients onClick={handleBack}>
            <ArrowBackIcon />
            <h2>clients</h2>
        </BackClients>
        <div className='flex flex-col lg:flex-row lg:items-start items-center justify-center sm:ml-10'>
            <div className="flex flex-row items-end relative">
                <AccountCircleIcon sx={{ fontSize: 250 }}/>
                <ManageAccountsIcon
                onClick={() => handleImage()}
                sx={{ fontSize: 40, cursor: "pointer", position: "absolute", bottom: "15px", right: "15px" }}/>
            </div>
            {image ? (
                <>
                <div className="transition-colors ease-in-out">
                    <Modal>
                        <div className="flex flex-col my-2">
                            <Edit>
                                <EditIcon sx={{ fontSize: 40 }} />
                            </Edit>
                            <Remove>
                                <DeleteForeverIcon sx={{ fontSize: 40 }}/>
                            </Remove>
                        </div>
                    <BackgroundModal>
                        <AccountCircleIcon sx={{ fontSize: 500 }}/>
                        <Exit
                        onClick={() => handleImageExit()}
                        >x</Exit>
                        
                    </BackgroundModal>
                    </Modal>
                </div>
                </>
            ) : null}
            <ClientDataSection>
                    <div className="flex flex-row w-auto justify-between my-5 lg:w-full">
                        <div className="flex flex-col w-full justify-start items-baseline">
                            <StyledH2>Name</StyledH2>
                            <StyledH1>Norman Osborn</StyledH1>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                        <MailIcon sx={{fontSize: "30px", margin: "0 20px", cursor: "pointer"}}/>
                        <WhatsAppIcon sx={{fontSize: "30px", margin: "0 20px", cursor: "pointer"}}/>
                        {!edit ? (
                                <button
                                className="m-2 rounded-lg border-neutral-400 hover:bg-slate-400"
                                onClick={() => handleEdit()}>
                                    <EditIcon
                                    sx={{fontSize: "30px", margin: "0 20px"}}/>
                                </button>
                            ) : (
                                <button
                                className="m-2 rounded-2xl border-neutral-400 hover:bg-green-400"
                                onClick={() => handleEdit()}>
                                    <CheckIcon
                                    sx={{fontSize: "30px", margin: "0 20px"}}/>
                                </button>
                                )}
                                </div>
                        </div>
                        <div className="flex flex-col justify-between sm:flex-row w-auto lg:w-full">
                        <div className="flex flex-col w-full justify-start items-start mr-5 sm:items-baseline">
                            <StyledH2>email</StyledH2>
                            <StyledH3>norman.osborn@gmail.com</StyledH3>
                        </div>
                        <div className="flex flex-col w-full justify-start items-start mr-5 sm:items-baseline">
                            <StyledH2>telefono</StyledH2>
                            <StyledH3>345-845-8789</StyledH3>
                        </div>
                        <div className="flex flex-col w-full justify-start items-start mr-5 sm:items-baseline">
                            <StyledH2>Membresia</StyledH2>
                            <StyledH3>Gold</StyledH3>
                        </div>
                        <div className="flex flex-col w-full justify-start items-start mr-5 sm:items-baseline">
                            <StyledH2>Nacimiento</StyledH2>
                            <StyledH3>18/03/1974</StyledH3>
                        </div>
                        <div className="flex flex-col w-full justify-start items-start mr-5 sm:items-baseline">
                            <StyledH2>id</StyledH2>
                            <StyledH3>16.153.669</StyledH3>
                        </div>
                        </div>
            </ClientDataSection>
        </div>
        <DataSection>
            <div className="flex flex-row w-full justify-start items-start">
            <button
            value={"activity"}
            onClick={(e) => handleSelectedInfo(e.currentTarget.value)}
            className={`flex flex-row items-center transition-colors ease-in-out justify-center w-full h-10 ${selectedData === "activity" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3
                name="activity"
                value="activity"
                >Actividad</StyledH3>
            </button>
            <button
            value={"medic"}
            onClick={(e) => handleSelectedInfo(e.currentTarget.value)}
            className={`flex flex-row items-center transition-colors ease-in-out justify-center w-full h-10 ${selectedData === "medic" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3>Apto medico</StyledH3>
            </button>
            <button 
            value={"payment"}
            onClick={(e) => handleSelectedInfo(e.currentTarget.value)}
            className={`flex flex-row items-center transition-colors ease-in-out justify-center w-full h-10 ${selectedData === "payment" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3>Pagos</StyledH3>
            </button>
            <button 
            value={"timeline"}
            onClick={(e) => handleSelectedInfo(e.currentTarget.value)}
            className={`flex flex-row items-center transition-colors ease-in-out justify-center w-full h-10 ${selectedData === "timeline" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3>Linea temporal</StyledH3>
            </button>
            <button
            value={"tools"}
            onClick={(e) => handleSelectedInfo(e.currentTarget.value)} 
            className={`flex flex-row items-center transition-colors ease-in-out justify-center w-full h-10 ${selectedData === "tools" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3>Herramientas</StyledH3>
            </button>
            </div>
                {loading ? ( <Spinner /> 
                ) : selectedData === "activity" ? (
                    <SelectedActivity 
                    user={user}
                    />
                ) : selectedData === "medic" ? (
                    <SelectedMedic 
                    user={user}
                    />
                ): selectedData === "payment" ? (
                    <SelectedPayment 
                    user={user}
                    />
                ) : selectedData === "timeline" ? (
                    <SelectedTimeline 
                    user={user}
                    />
                ) : selectedData === "tools" ? (
                    <SelectedTools 
                    user={user}
                    />
                ) : null}
        </DataSection>
        <Footer />
        </>
    )
}