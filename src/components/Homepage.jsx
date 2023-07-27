import './Homepage.css'
import stardew from '../assets/images/Stardew.png'

export default function HomePage() {

    let coin = 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png'

    return (
        <div className="Homepage"> 
           <div className='Card-conteiner'>
            <div>{'Store > Games > Stardew Valley'}</div>
            <div className='Card'>
                <div>
                    <div>
                        <img width={'75%'} src={stardew} alt='error'></img>
                    </div>
                    <div>
                        <img width={125} src={stardew} alt='error'></img>
                        <img width={125} src={stardew} alt='error'></img>
                        <img width={125} src={stardew} alt='error'></img>
                        <img width={125} src={stardew} alt='error'></img>
                        <img width={125} src={stardew} alt='error'></img>
                    </div>
                    <div className='clasification'>
                        <img src='https://www.esrb.org/wp-content/uploads/2019/05/E10plus.svg' alt='error'></img>
                        <h4> Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood
                        </h4>   
                        <h4>Users Interact</h4>
                    </div>
                </div>
                <div>
                    <h1>| Nintendo Switch</h1>
                    <h1>Stardew Valley</h1>
                    <h1>$ 14.99 </h1>
                    <img width={25} src={coin} alt='coin'></img><h4>Eligible for up to 75 Gold Points</h4>
                    <button>Direct Download</button>
                    <h4>This item will be sent to your system automatically after purchase.</h4>
                </div>
            </div>
           </div>
        </div>
        )
}