import { styled, alpha, createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';


export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '15px',
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    '&:active': {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: '100%',
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
      width: '10ch',
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
      backgroundColor:"#F2AB4C",
      alignItems: "center",
      justifyContent: 'space-between',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      "@media all": {
        minHeight: 100
      }
    }));
  
    export const StyledRightSide = styled('div')(({ theme }) => ({
      position: 'static',
      width: "300px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'flex-end',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      
    }));
  
    export const StyledLeftSide = styled('div')(({ theme }) => ({
      marginLeft: "20px",
      position: 'static',
      width: "100%",
      maxWidth: '500px',
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
     
    }));
  
    export const StyledItems = styled('div')(({ theme }) => ({
      marginLeft: '10px',
      marginRight: '10px',
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    }))
  
    export const StyledH2 = styled('h2')(({ theme }) => ({
      textTransform: 'uppercase',
      fontSize: '1rem',
      fontFamily: "Roboto",
      fontWeight: "bold",
      transition: theme.transitions.create('color'),
      '&:hover': {
          cursor: 'pointer',
          color: 'black' 
      }
  }))

  export const StyledOptionSection = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: "row",
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: "#F2AB4C",
  }))
  
  export const StyledOptionBar = styled('h2')(({ theme }) => ({ 
    display: "none",
    flexDirection: "row",
    alignItems: 'center',
    fontSize: "1rem",
    letterSpacing: "0.2ch",
    textTransform: "uppercase",
    justifyContent: 'center',
    borderTop: "1px solid #E59303",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "normal",
    width: '16.666%',
    height: '50px',
    backgroundColor: "#F2AB4C",
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#E59303'
    },
    '&:active': {
      backgroundColor: '#E59303'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }))

  export const StyledMediaMenu = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    fontSize: "1rem",
    letterSpacing: "0.2ch",
    textTransform: "uppercase",
    justifyContent: 'center',
    borderTop: "1px solid #E59303",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "normal",
    width: '100%',
    height: '50px',
    backgroundColor: "#F2AB4C",
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#E59303'
    },
    '&:active': {
      backgroundColor: '#E59303'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }))