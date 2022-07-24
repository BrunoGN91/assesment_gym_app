import { useEffect, useState } from "react";
import { Header } from "../Header/Header"
import Box from '@mui/material/Box';
import { DATA_CLIENTS } from "../Data/data";
import { useNavigate } from 'react-router-dom'

import { Search,
    SearchIconWrapper,
    StyledInputBase,
    StyledClientsTopBar,
    StyledNewClient,
    StyledH2,
    StyledClientsBody,
    StyledClientDetails,
    StyledH1,
    StyledClient,
    StyledClientsActions }from './StyledClients'

// Icons
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Clients = () => {

    const [list, setList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setList(DATA_CLIENTS)
    },[])

    const handleNavigation = (id) => {
        navigate("/client/" + id)
    }

    return (
        //   <-----------------------------------           MISSING MEDIA QUERIES
        <>
        <Box
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
        >
        <Header />
        <StyledClientsTopBar>
        <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'black'}}/>
            </SearchIconWrapper>
            <StyledInputBase
            
              placeholder="Search clients.."
              inputProps={{ 'Roboto': 'search' }}
            />
          </Search>
          <StyledNewClient>
            <StyledH2>Nuevo Cliente</StyledH2>
            <AddCircleOutlineIcon fontSize="large"/>
          </StyledNewClient>
          </StyledClientsTopBar>
          <StyledClientsBody>
                    <StyledClientsActions>
                        <div className="flex flex-row m-5 items-center">
                            <h2 className="uppercase font-bold text-orange-600 text-3xl">27</h2>
                            <h2 className="uppercase font-bold text-orange-600 text-sm">Clientes</h2>
                        </div>
                        <div className="flex flex-row mx-5">
                            <h2 className="uppercase font-bold mx-5 text-sm">Filtros</h2>
                            <h3 className="uppercase font-bold mx-5 text-sm">Acciones</h3>
                        </div>
                    </StyledClientsActions>
                    <StyledClientDetails>
                        <StyledH1>Nombre</StyledH1>
                        <StyledH1>Email</StyledH1>
                        <StyledH1>Telefono</StyledH1>
                        <StyledH1>Membresia</StyledH1>
                        <StyledH1>vencimiento</StyledH1>
                        <StyledH1>Frecuencia</StyledH1>
                    </StyledClientDetails>
                    {list && list.map((item) => (
                    <StyledClient
                    onClick={() => handleNavigation(item.id)}
                    key={item.id}
                    >
                        <div className="flex flex-row items-center">
                            <AccountCircleIcon fontSize="large"/>
                            <StyledH1>{item.fullName}</StyledH1>
                        </div>
                        <StyledH1>{item.email}</StyledH1>
                        <StyledH1>{item.phone}</StyledH1>
                        <StyledH1>{item.membership}</StyledH1>
                        <StyledH1>{item.expire}</StyledH1>
                        <StyledH1>{item.frequency}</StyledH1>
                    </StyledClient>
                    ))}
            
          </StyledClientsBody>
          </Box>
        </>
    )
}