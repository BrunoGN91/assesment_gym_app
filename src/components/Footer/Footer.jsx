import { FooterBackground } from "./StyledFooter"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MailIcon from '@mui/icons-material/Mail';

export const Footer = () => {
    return (
        <>
        <FooterBackground>
            <div className="grid grid-cols-3 gap-4 items-start justify-around w-full h-full">
            <div className="flex flex-col ml-60 w-80 h-full items-start justify-center uppercase font-thin text-lg text-white">
                <div className="flex flex-row items-center justify-center">
                <WhatsAppIcon sx={{ fontSize: 30, color: "white", margin: "0px 20px"}}/>
                <h2>Whatsapp</h2>
                </div>
                <div className="flex flex-row items-center justify-center">
                <FacebookIcon sx={{ fontSize: 30, color: "white", margin: "0px 20px"}}/>
                <h2>Facebook</h2>
                </div>
                <div className="flex flex-row items-center justify-center">
                <InstagramIcon sx={{ fontSize: 30, color: "white", margin: "0px 20px"}}/>
                <h2>Instagram</h2>
                </div>
                <div className="flex flex-row items-center justify-center">
                <MailIcon sx={{ fontSize: 30, color: "white", margin: "0px 20px"}}/>
                <h2>Email</h2>
                </div>
            </div>
            <div className="flex flex-col w-80 h-full items-center justify-center uppercase font-thin text-lg text-white">
                <h2>Contact us</h2>
                <h2>About us</h2>
                <h2>Instagram</h2>
                <h2>Email</h2>
            </div>
            <div className="flex flex-col w-80 h-full items-end justify-center mt-10 uppercase font-thin text-sm text-white">
                <h2>© Copyright all rights reserved</h2>
                <h2>2022-2022</h2>
            </div>
            
            </div>
        </FooterBackground>
        </>
    )
}