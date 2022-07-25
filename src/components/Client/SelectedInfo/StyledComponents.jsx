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
    border: '1px solid black',
    backgroundColor: "#CBE765",
    '&:active': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginLeft: 0,
    width: '100%',
    maxWidth: "200px",
    '&:hover': {
        backgroundColor: "#87fa64",
        cursor: 'pointer',
  }
  }))

  export const StyledH2 = styled('h2')(({ theme }) => ({
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: "100",
    margin: "0 10px",
    transition: theme.transitions.create('color'),
}))

export const ShadowBox = styled('h2')(({ theme })=> ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textTransform: "uppercase",
  justifyContent: "space-between",
  width: "91.666%",
  fontSize: "1.125rem",
  fontWeight: "200",
  lineHeight: "1.75rem",
  padding: "1.25rem",
  margin: "0.5rem 2.5rem",
  backgroundColor: "rgba(241, 245, 249, 1)",
  borderRadius: "",
  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",

}))


export const ShadowBoxCol = styled('h2')(({ theme })=> ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textTransform: "uppercase",
  justifyContent: "space-between",
  width: "91.666%",
  fontSize: "1.125rem",
  fontWeight: "200",
  lineHeight: "1.75rem",
  padding: "1.25rem",
  margin: "0.5rem 2.5rem",
  backgroundColor: "rgba(241, 245, 249, 1)",
  borderRadius: "",
  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",

}))