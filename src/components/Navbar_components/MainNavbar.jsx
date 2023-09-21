
import NintendoLogo from '../../assets/images/Nintendo.png'
import NintendoStoreLogo from '../../assets/SVG/nintendostorelogo.svg'
import Lupa from '../../assets/images/lupa.png'
import test from '../../assets/SVG/redlupe.svg'

export default function MainNavbar () {

    return (
        <nav className="MainNavbar">
            <div className='MainNavbar-firstDiv'>
                <div>
                    <div className="logo">
                        <img width={150} src={NintendoLogo} alt='error'></img>
                    </div>
  
                </div>
                <div className='SearchBar-conteiner'>
                    <form className='SearchBar'>
                        <span>
                            <div className='search-button'>
                                
                                <img className='search-lupa' src={test} alt='error'></img>
                                {
                                    /*     
                                    <input id='search' placeholder='Search'></input>
                                    <label for='search'></label>
                                    */ 
                                }
                                <span>Search</span>
                            </div>
                        </span>
                        <div>
                            <div>All categories</div>
                        </div>
                    </form>
                </div>

            </div>
            <div className='MainNavbar-secondDiv'>
                <div className='SearchBar-buttons'>
                    <div>Support</div>
                    <div>Wishlist</div>
                    <div>Cart</div>
                    <div>Log in/ Sign up</div> 
                </div>

                <div className="logo-responsive">
                        <img width={150} src={NintendoStoreLogo} alt='error'></img>
                    </div>
                <div className='flag-button'>
                    <img alt='flag' src='https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png'></img>
                </div>
            </div>
        </nav>
    )
}