import { styled, alpha, createTheme } from '@mui/material/styles';


export const FooterBackground = styled("div")(({ theme }) => ({
    position: 'relative',
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    zIndex: '1',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '200px',
    overflow: 'auto',
    backgroundColor: '#2D2D2D'
}))