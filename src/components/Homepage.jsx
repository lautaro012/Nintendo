import './Homepage.css'
import stardew from '../assets/images/Stardew.png'
import calender from '../assets/SVG/calendario.svg'
import players from '../assets/SVG/players.svg'
import controller from '../assets/SVG/controller.svg'
import building from '../assets/SVG/building.svg'
import config from '../assets/SVG/config.svg'
import console from '../assets/SVG/switch.svg'
import memory from '../assets/SVG/memory.svg'
import world from '../assets/SVG/world.svg'
import online from '../assets/SVG/online.svg'
import PC from '../assets/SVG/pc.svg'
import handheld from '../assets/SVG/handheld.svg'
import tabletop from '../assets/SVG/tabletop.svg'

export default function HomePage() {

    let coin = 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png'

    return (
        <div className='Main'>
            <div className="Homepage"> 
            <div className='Card-conteiner'>
                <div>{'Store > Games > Stardew Valley'}</div>
                <div className='Card'>
                    <div>
                        <div>
                            <img width={'75%'} src={stardew} alt='error'></img>
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
            <div>
                    <h1><b>You're moving to the valley...</b></h1>
            
                    <p>You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!
                    </p>
                    <br></br>
                    <p>
                    Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience
                    </p>
                    
                    <button className='explore-button'>
                        Explore this game's official website
                    </button>
                    <img width={'100%'} src={stardew} alt='error'></img>
                    <div className='clasification-mobile'>
                        <h2>ESRB Rating</h2>
                        <img src='https://www.esrb.org/wp-content/uploads/2019/05/E10plus.svg' alt='error'></img>
                        <h4> Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood
                        </h4>   
                        <h4>Users Interact</h4>
                    </div>            
                    <div className='SPM'>
                        <h2> Supported play modes </h2>
                        <div className='playmodes-conteiner'>
                            <div>
                                <div className='playmodes'>
                                   <img src={PC} alt='img'></img>
                                </div>
                                <h2>TV</h2>
                            </div>
                            <div>
                                <div className='playmodes'>
                                    <img src={tabletop} alt='img'></img>
                                </div>
                                <h2>Tabletop</h2>
                            </div>
                            <div>
                                <div className='playmodes'>
                                    <img src={handheld} alt='img'></img>
                                </div>
                                <h2>Handheld</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                       <div>
                            <img src={calender} alt='img'></img>
                            <div> Release date </div>
                            <div>October 5, 2017</div>
                       </div>
                       <div>
                            <img src={players} alt='img'></img>
                            <div> No. of players </div>
                            <div>
                                <a href='https://robleslautaro.dev'>Single System (1)</a> 
                                <a href='https://robleslautaro.dev'>Local wireless (1)</a> 
                                <a href='https://robleslautaro.dev'> Online (1-4) </a> 
                            </div>
                       </div>
                       <div>
                            <img src={controller} alt='img'></img>
                            <div>Genre</div>
                            <div>
                                <a href='https://robleslautaro.dev'>Role-Playing</a>
                                <a href='https://robleslautaro.dev'>Simulation</a>
                            </div>
                       </div>
                       <div>
                            <img src={building} alt='img'></img>
                            <div>Publisher</div>
                            <div> <a href='https://robleslautaro.dev'> ConcernedApe </a></div>
                       </div><div>
                            <img src={config} alt='img'></img>
                            <div> ESRB rating </div>
                            <div> <a href='https://robleslautaro.dev'>Everyone 10+</a> </div>
                       </div><div>
                            <img src={console} alt='img'></img>
                            <div> Supported play modes </div>
                            <div> TV mode, Tabletop mode, Handheld mode </div>
                       </div><div>
                            <img src={memory} alt='img-memory'></img>
                            <div> Game file size </div>
                            <div> 1.5 GB </div>
                       </div><div>
                            <img src={world} alt='img'></img>
                            <div> Supported languages </div>
                            <div> English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese </div>
                       </div>
                    </div>
                    <div>
                        <img src={online} alt='online-err'></img>
                        <p> Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership. </p>
                        <p>This game supports: {<a href='https://robleslautaro.dev'>Online Play</a>}  {<a href='https://robleslautaro.dev'>Save Data Cloud</a>}</p>
                        <button> Learn More </button>
                    </div>
                    <div>
                        <h2><b> More Like This </b></h2>
                        <img width={'100%'} alt='err' src={stardew}></img>
                    </div>
                    <div>
                        <p> 
                            WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.
                            
                            Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online

                            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
                       </p>
                    </div>
            </div>
        </div>
        )
}