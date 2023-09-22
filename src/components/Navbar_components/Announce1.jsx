import Coin from '../../assets/SVG/coin'
import Truck from '../../assets/SVG/truck'

export default function Announce1 () {


    return (
        <nav className="Announce1">
            <section>
                <div className="responsive-announce-hidden">
                    <span>
                        <Truck color='#e60012'/>
                        {<p><b>Free shipping</b> on orders $50 or more. <u>Restrictions apply.</u></p>}
                    </span>
                </div>
                <div className="separator"> | </div>
                <div className="responsive-announce">
                    <span>
                        <Coin/>
                        {<p> Earn <b><u> My Nintendo Points </u></b> on digital games </p>}
                    </span>
                </div>
            </section>
        </nav>
    )
}