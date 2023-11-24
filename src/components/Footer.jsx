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
                <div className='footer-bottom-grid'>
                    <div className='footer-bottom-segment'>
                        <h2> About Nintendo </h2>
                        <ul>
                            <li>
                                <a href='https://robleslautaro.dev'><span>Careers</span></a>        
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Corporate Social Responsibility </span></a>
                            </li>
                        </ul>
                    </div>
                                
                    <div className='footer-bottom-segment'>
                        <h2> Shop </h2>
                        <ul>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Games </span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Hardware </span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span>Merchandise</span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Sales & deals </span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Exclusives </span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Online service </span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Nintendo NY store </span></a>
                            </li>
                        </ul>
                    </div>
                                
                    <div className='footer-bottom-segment'>
                        <h2> My Nintendo Store orders </h2>
                        <ul>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Order details </span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Shipping info </span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span>  Returns & exchanges </span></a>
                            </li>
                            <li>
                                <a href='https://robleslautaro.dev'><span> FAQ </span></a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='footer-bottom-segment'>
                        <h2> Support </h2>
                        <ul>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Nintendo Switch </span></a>
                            </li>                            <li>
                                <a href='https://robleslautaro.dev'><span> Nintendo Account </span></a>
                            </li>                            <li>
                                <a href='https://robleslautaro.dev'><span> Other systems </span></a>
                            </li>                            <li>
                                <a href='https://robleslautaro.dev'><span> Repairs </span></a>
                            </li>                            <li>
                                <a href='https://robleslautaro.dev'><span> Nintendo product recycling </span></a>
                            </li>
                        </ul>
                    </div>
                
                    <div className='footer-bottom-segment'>
                        <h2> Parents </h2>
                        <ul>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Info for parents </span></a>
                            </li>                            <li>
                                <a href='https://robleslautaro.dev'><span> Parental control </span></a>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-bottom-segment'>
                        <h2> Community </h2>
                        <ul>
                            <li>
                                <a href='https://robleslautaro.dev'><span> Community guidelines </span></a>
                            </li>                            <li>
                                <a href='https://robleslautaro.dev'><span> Online safety principles </span></a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='footer-bottom-segment'>
                        <h2> Privacy </h2>
                        <ul>
                            <li>
                                <a href='https://robleslautaro.dev'><span>  Privacy Policy </span></a>
                            </li>                            <li>
                                <a href='https://robleslautaro.dev'><span> Cookies and interest-based ads </span></a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-bottom-segment'>
     
                    </div>
                </div>

                {<img width={'64px'} className='ESRB-image' src={ESRB} alt='ESRB'></img>}
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
