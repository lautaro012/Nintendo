import coin from '../../assets/SVG/coin.svg'
import truck from '../../assets/SVG/truck.svg'

export default function Announce1 () {


    return (
        <nav className="Announce1">
           <div className="responsive-announce-hidden">
            <img src={truck} alt='error'></img>
           Free shipping on orders $50 or more. Restrictions apply.
           </div>
           <div className="separator"> | </div>
           <div className="responsive-announce">
            <img src={coin} alt='error'></img>
            {<p> Earn <b><u> My Nintendo Points </u></b> on digital games </p>}
           </div>
        </nav>
    )
}