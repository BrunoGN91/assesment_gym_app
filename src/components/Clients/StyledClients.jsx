import { styled, alpha, createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';


export const StyledClientsTopBar = styled('div')(({ theme}) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "30px",
    backgroundColor: alpha(theme.palette.common.black, 0.1)
}))

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    border: '1px solid black',
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    width: '100%',
    maxWidth: "300px",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  export const SearchIconWrapper = styled('div')(({ theme }) => ({
      
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'black',
      '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      '&:hover': {
          cursor: 'pointer'
      },
      transition: theme.transitions.create('width'),
      width: '20ch'
    },
  }));

  export const StyledNewClient = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: '20px',
    minHeight: "41px",
    border: '1px solid black',
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    width: '100%',
    maxWidth: "200px",
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: alpha(theme.palette.success.light, .18)
  }
  }))

  export const StyledH2 = styled('h2')(({ theme }) => ({
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontFamily: "Roboto",
    fontWeight: "100",
    letterSpacing: "0.1ch",
    margin: "0 10px",
    transition: theme.transitions.create('color'),
}))


export const StyledClientsBody = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "80vh",
  margin: "50px 20px 0 20px",
    backgroundColor: alpha(theme.palette.common.black, 0.1)
}))

export const StyledClientsActions = styled("div")(({ theme }) => ({
  display: 'flex',
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "95%",
  padding: "5px 5px",
  borderBottom: "1px solid rgba(0,0,0,0.1)"
}))

export const StyledClientDetails = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr 1fr",
  alignItems: "center",
  width: "95%",
  padding: "15px 5px",
  borderBottom: "1px solid rgba(0,0,0,0.1)"
}))

export const StyledClient = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr 1fr",
  alignItems: "center",
  width: "95%",
  padding: "15px 5px",
  '&:hover': {
    cursor: "pointer",
    backgroundColor: alpha(theme.palette.common.black, 0.1)
  }
 
}))


export const StyledH1 = styled('h2')(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '0.8rem',
  fontFamily: "Roboto",
  fontWeight: "bold",
  margin: "0 10px",
  color: alpha(theme.palette.common.black),
  transition: theme.transitions.create('color'),
}))