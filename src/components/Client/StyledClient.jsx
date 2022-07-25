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


export const Modal = styled("div")(({ theme }) => ({
    position: 'fixed',
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    zIndex: '1',
    paddingTop: '100px', 
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    transition: "1.2s ease-in-out",
    backgroundColor: alpha(theme.palette.common.black, 0.5),
}))

export const BackgroundModal = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    borderRadius: "12px",
    backgroundColor: alpha(theme.palette.common.white, 1),
}))

export const Exit = styled("span")(({ theme }) => ({
        position: "absolute",
        cursor: "pointer",
        top: '80px',
        right: '100px',
        color:' #f1f1f1',
        fontSize: '40px',
        fontWeight: 'bold',
        transition: '0.3s',
}))

export const Edit = styled("div")(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 1),
    width: "auto",
    borderRadius: "50%",
    padding: "10px",
    marginRight: "10px",
    cursor: "pointer",
    '&:hover': {
        backgroundColor: "#CBE765"
    }
}))

export const Remove = styled("div")(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 1),
    width: "auto",
    borderRadius: "50%",
    padding: "10px",
    marginRight: "10px",
    cursor: "pointer",
    marginTop: "12px",
    '&:hover': {
        backgroundColor: "#f15d4a"
    }
}))