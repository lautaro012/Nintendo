import NintendoLogo from '../assets/images/Nintendo.png'
import './Footer.css'
import fb from '../assets/SVG/FB.svg'
import ig from '../assets/SVG/IG.svg'
import twitter from '../assets/SVG/twitter.svg'
import yt from '../assets/SVG/youtube.svg'
import ESRB from '../assets/SVG/ESRB.svg'

export default function Footer() {

    return (

        <footer className='footer'>
            <div className='footer-top'>
                <img className='footer-nintendo-logo' src={NintendoLogo} width={100} alt='nintendo logo'></img>
                <div>
                    <img src={fb} alt='error'></img>
                    <img src={ig} alt='error'></img>
                    <img src={twitter} alt='error'></img>
                    <img src={yt} alt='error'></img>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-segment'>
                    <h2> About Nintendo </h2>
                    <h3> Careers </h3>
                    <h3> Corporate Social Responsibility </h3>
                </div>
                              
                <div className='footer-bottom-segment'>
                    <h2> Shop </h2>
                    <h3> Games </h3>
                    <h3> Hardware </h3>
                    <h3> Merchandise </h3>
                    <h3> Sales & deals </h3>
                    <h3> Exclusives </h3>
                    <h3> Online service </h3>
                    <h3> Nintendo NY store </h3>
                </div>
                              
                <div className='footer-bottom-segment'>
                    <h2> My Nintendo Store orders </h2>
                    <h3> Order details </h3>
                    <h3> Shipping info </h3>
                    <h3> Returns & exchanges </h3>
                    <h3> FAQ </h3>
                </div>
               
                <div className='footer-bottom-segment'>
                    <h2> title </h2>
                    <h3> example 1 </h3>
                    <h3> example 2 </h3>
                </div>
                
                <div className='footer-bottom-segment'>
                    <h2> Support </h2>
                    <h3> Nintendo Switch </h3>
                    <h3> Nintendo Account </h3>
                    <h3> Other systems </h3>
                    <h3> Repairs </h3>
                    <h3> Nintendo product recycling </h3>
                </div>
               
                <div className='footer-bottom-segment'>
                    <h2> Parents </h2>
                    <h3> Info for parents </h3>
                    <h3> Parental control </h3>
                </div>

                <div className='footer-bottom-segment'>
                    <h2> Community </h2>
                    <h3> Community guidelines </h3>
                    <h3> Online safety principles </h3>
                </div>
                
                <div className='footer-bottom-segment'>
                    <h2> Privacy </h2>
                    <h3> Privacy Policy </h3>
                    <h3> Cookies and interest-based ads </h3> 
                </div>

                {<svg>{ESRB}</svg>}
            </div>

            <div className='property'>
                <span>© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</span>
                <div className='property-buttons'>
                    <a href='https://robleslautaro.dev'> Contact us</a>
                    <a href='https://robleslautaro.dev'> Website feedback </a>
                    <a href='https://robleslautaro.dev'> Terms of use </a>
                    <a href='https://robleslautaro.dev'> Documents & Policies </a>
                </div>
            </div>
        </footer>
        )  
}
