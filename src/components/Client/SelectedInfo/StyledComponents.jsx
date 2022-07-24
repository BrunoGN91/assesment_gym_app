import { styled, alpha, createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';


 export const NewPayment = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: '25px',
    minHeight: "41px",
    padding: "0 10px",
    border: '2px solid black',
    backgroundColor: "#CBE765",
    '&:active': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    width: '100%',
    maxWidth: "200px",
    '&:hover': {
        backgroundColor: "#9EBC20",
        cursor: 'pointer',
  }
  }))

  export const StyledH2 = styled('h2')(({ theme }) => ({
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: "regular",
    margin: "0 10px",
    transition: theme.transitions.create('color'),
}))