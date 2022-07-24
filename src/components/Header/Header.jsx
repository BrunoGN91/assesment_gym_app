import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

// Icons
import Logo from '../../logos/weight.png'
import Home from '../../logos/home(1).png'
import Manage from '../../logos/settings(1).png'
import Reports from '../../logos/stats.png'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';

// Styles
import { 
    Search, 
    SearchIconWrapper, 
    StyledInputBase, 
    StyledToolbar, 
    StyledRightSide, 
    StyledLeftSide, 
    StyledItems, 
    StyledH2,
    StyledOptionBar,
    StyledOptionSection,
    StyledMediaMenu
    } from './StyledHeader'



export const Header = () => {


    return (
        <>
         <Box 
         sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static">
        <StyledToolbar>
        <StyledLeftSide>
            <img 
            className='w-10 mr-5'
            src={Logo} 
            name="logo_gym"/>
            <StyledItems>
                <img 
                className='w-6 mx-5'
                src={Home} alt="" />
                <StyledH2>Home</StyledH2>
            </StyledItems>
            <StyledItems>
            <img 
            className='w-6 mx-5'
            src={Reports} alt="" />
                <StyledH2>Reports</StyledH2>
            </StyledItems>
            <StyledItems>
            <img 
            className='w-6 mx-5'
            src={Manage} alt="" />
                <StyledH2>Manage</StyledH2>
            </StyledItems>
        </StyledLeftSide>
        <StyledRightSide>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'black'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder=""
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mx: 5 }}>
            <MenuIcon fontSize="large" />
          </IconButton>
          </StyledRightSide>
        </StyledToolbar>
        <StyledOptionSection>
            <StyledMediaMenu>
                    <ListIcon fontSize="large"/>
            </StyledMediaMenu>
            <StyledOptionBar>Dashboard</StyledOptionBar>
            <StyledOptionBar>Calendar</StyledOptionBar>
            <StyledOptionBar>Store</StyledOptionBar>
            <StyledOptionBar>Classes</StyledOptionBar>
            <StyledOptionBar>Payments</StyledOptionBar>
            <StyledOptionBar>Studio</StyledOptionBar>
        </StyledOptionSection>
      </AppBar>
    </Box>
        </>
    )
}