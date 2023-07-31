import NintendoLogo from '../assets/images/Nintendo.png'
import './Footer.css'
export default function Footer() {

    return (

        <footer className='footer'>
            <div className='footer-top'>
                <img src={NintendoLogo} width={100} alt='nintendo logo'></img>
                <div>
                    <img alt='error'></img>
                    <img alt='error'></img>
                    <img alt='error'></img>
                    <img alt='error'></img>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-segment'>
                    <h2> title </h2>
                    <h3> example 1 </h3>
                    <h3> example 2 </h3>
                </div>
                              
                <div className='footer-bottom-segment'>
                    <h2> title </h2>
                    <h3> example 1 </h3>
                    <h3> example 2 </h3>
                </div>
                              
                <div className='footer-bottom-segment'>
                    <h2> title </h2>
                    <h3> example 1 </h3>
                    <h3> example 2 </h3>
                </div>
               
                <div className='footer-bottom-segment'>
                    <h2> title </h2>
                    <h3> example 1 </h3>
                    <h3> example 2 </h3>
                </div>
                
                <div className='footer-bottom-segment'>
                    <h2> title </h2>
                    <h3> example 1 </h3>
                    <h3> example 2 </h3>
                </div>
               
                <div className='footer-bottom-segment'>
                    <h2> title </h2>
                    <h3> example 1 </h3>
                    <h3> example 2 </h3>
                </div>
            </div>

            <div className='property'>
                <div>© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</div>
                <div className='property-buttons'>
                    <button>Butt</button>
                    <button>Butt</button>
                    <button>Butt</button>
                    <button>Butt</button>
                    <button>Butt</button>
                </div>
            </div>
        </footer>
        )  
}
