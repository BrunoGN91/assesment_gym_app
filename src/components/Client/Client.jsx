import {useEffect, useState} from "react"

import { Header } from './../Header/Header'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

import {
    BackClients,
    StyledH2,
    ClientDataSection,
    StyledH1,
    StyledH3,
    DataSection,
    DataSelection
} from './StyledClient'

export const Client = () => {

    const [selectedData, setSelectedData] = useState("")

    return(
        <>
        <Header />
        <BackClients>
            <ArrowBackIcon />
            <h2>clients</h2>
        </BackClients>
        <div className='flex flex-col w-full lg:flex-row lg:items-start items-center justify-center sm:ml-10'>
            <AccountCircleIcon sx={{ fontSize: 200 }}/>
            <ClientDataSection>
                    <div className="flex flex-row w-auto justify-between my-5 lg:w-full">
                        <div className="flex flex-col w-full justify-start items-baseline">
                            <StyledH2>Name</StyledH2>
                            <StyledH1>Norman Osborn</StyledH1>
                        </div>
                        <SettingsIcon sx={{fontSize: "30px", marginRight: "20px"}}/>
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
            <button
            value={"activity"}
            onClick={(e) => setSelectedData(e.currentTarget.value)}
            className={`flex flex-row items-center justify-center w-full h-10 ${selectedData === "activity" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3
                name="activity"
                value="activity"
                >Actividad</StyledH3>
            </button>
            <button
            value={"medic"}
            onClick={(e) => setSelectedData(e.currentTarget.value)}
            className={`flex flex-row items-center justify-center w-full h-10 ${selectedData === "medic" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3>Apto medico</StyledH3>
            </button>
            <button 
            value={"payment"}
            onClick={(e) => setSelectedData(e.currentTarget.value)}
            className={`flex flex-row items-center justify-center w-full h-10 ${selectedData === "payment" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3>Pagos</StyledH3>
            </button>
            <button 
            value={"timeline"}
            onClick={(e) => setSelectedData(e.currentTarget.value)}
            className={`flex flex-row items-center justify-center w-full h-10 ${selectedData === "timeline" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3>Linea temporal</StyledH3>
            </button>
            <button
            value={"tools"}
            onClick={(e) => setSelectedData(e.currentTarget.value)} 
            className={`flex flex-row items-center justify-center w-full h-10 ${selectedData === "tools" ? 'bg-stone-400' : 'bg-stone-300'}`}>
                <StyledH3>Herramientas</StyledH3>
            </button>
        </DataSection>
        </>
    )
}