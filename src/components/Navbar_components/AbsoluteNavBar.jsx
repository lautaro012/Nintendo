import Cart from "../../assets/SVG/Cart";
import Dropdown from "../../assets/SVG/dropdown";
import Hearth from "../../assets/SVG/hearth";
import MagnifiscentGlass from "../../assets/SVG/lupe";
import User from "../../assets/SVG/user";

export default function AbsoluteNavBar () {

    return (
        <div className="AbsoluteNavBar-conteiner">
            <div className="ANB">
                <nav className="AbsoluteNavBar">
                    <button className="ABN-button">
                        <Dropdown></Dropdown>
                    </button>
                    
                    <a href='https://www.robleslautaro.dev' className="ABN-button">
                        <Hearth></Hearth>
                    </a>
                    
                    <a href='https://www.robleslautaro.dev' className="ABN-button-search">
                        <MagnifiscentGlass></MagnifiscentGlass>
                    </a>
                    
                    <a href='https://www.robleslautaro.dev' className="ABN-button">
                        <Cart></Cart>
                    </a>
                    
                    <a href='https://www.robleslautaro.dev' className="ABN-button">
                        <User></User>
                    </a>           
                </nav>
            </div>
        </div>
    )
}