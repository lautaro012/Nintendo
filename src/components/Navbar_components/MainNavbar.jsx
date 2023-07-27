
import NintendoLogo from '../../assets/images/Nintendo.png'
import lupa from '../../assets/images/lupa.png'

export default function MainNavbar () {

    return (
        <nav className="MainNavbar">
            <div className="logo">
                <img width={150} src={NintendoLogo} alt='error'></img>
            </div>
            <div className='SearchBar'>
                <img src={lupa} alt='error'></img>
                <input id='search' placeholder='Search games, hardware, news, etc'></input>
                <label for='search'></label>
                <button>All categories</button>
            </div>

            <button>Support</button>
            <button>Wishlist</button>
            <button>Cart</button>
            <button>Log in/ Sign up</button>
            <button>Flag</button>
        </nav>
    )
}