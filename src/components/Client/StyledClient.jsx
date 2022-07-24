import { styled, alpha, createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';



export const BackClients = styled("div")(({theme}) => ({
    position: "relative",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "5px",
    width: "130px",
    padding: "5px",
    margin: "20px 40px",
    textTransform: "uppercase",
    display: "flex",
    color: "#4574FF",
    flexDirection: "row",
    border: "1px solid #4574FF",
    '&:hover': {
        cursor: "pointer",
        backgroundColor: "#4574FF",
        color: alpha(theme.palette.common.white, 1)
    }
}))

export const StyledH2 = styled("h2")(({theme}) => ({
    fontSize: "1rem",
    textTransform: "uppercase",
    marginLeft: "5px",
    color: "#E59303",
    fontWeight: "regular",

}))
export const StyledH1 = styled("h1")(({theme}) => ({
    fontSize: "2rem",
    textTransform: "uppercase",
    marginLeft: "5px",
    fontWeight: "bold",

}))

export const StyledH3 = styled("h3")(({theme}) => ({
    fontSize: "0.8rem",
    textTransform: "uppercase",
    marginLeft: "5px",
    fontWeight: "bold",

}))

export const ClientDataSection = styled("div")(({theme}) => ({ 
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: '100%',
    alignItems: 'start',
    justifyContent: 'space-between',
    borderRadius: "5px",
    padding: "15px",
    margin: "20px 60px",
    [theme.breakpoints.up('sm')]: {
        margin: "20px 60px",
        padding: '5px'
      },
}))

export const DataSection = styled("div")(({theme}) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: '100%',
    maxWidth: '100%',
    margin: "40px 30px",
    minHeight: '80vh',
    backgroundColor: alpha(theme.palette.common.black, 0.1)
}))
