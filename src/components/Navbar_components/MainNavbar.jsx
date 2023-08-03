
import NintendoLogo from '../../assets/images/Nintendo.png'
import NintendoStoreLogo from '../../assets/SVG/nintendostorelogo.svg'
import lupa from '../../assets/images/lupa.png'

export default function MainNavbar () {

    return (
        <nav className="MainNavbar">
            <div className="logo">
                <img width={150} src={NintendoLogo} alt='error'></img>
            </div>
            <div className="logo-responsive">
                <img width={150} src={NintendoStoreLogo} alt='error'></img>
            </div>
                <div className='SearchBar'>
                    <img src={lupa} alt='error'></img>
                    <input id='search' placeholder='Search games, hardware, news, etc'></input>
                    <label for='search'></label>
                    <button>All categories</button>
                </div>

                <div className='SearchBar-buttons'>
                    <button>Support</button>
                    <button>Wishlist</button>
                    <button>Cart</button>
                    <button>Log in/ Sign up</button> 
                </div>

            <button className='flag-button'>
                <img alt='flag' src='https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png'></img></button>
        </nav>
    )
}