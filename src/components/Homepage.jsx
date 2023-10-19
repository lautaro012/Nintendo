import './Homepage.css'
import stardew from '../assets/images/Stardew.png'
import calender from '../assets/SVG/calendario.svg'
import players from '../assets/SVG/players.svg'
import Controller from '../assets/SVG/controller.jsx'
import building from '../assets/SVG/building.svg'
import config from '../assets/SVG/config.svg'
import console from '../assets/SVG/switch.svg'
import memory from '../assets/SVG/memory.svg'
import world from '../assets/SVG/world.svg'
import online from '../assets/SVG/online.svg'
import PC from '../assets/SVG/pc.svg'
import handheld from '../assets/SVG/handheld.svg'
import Hearthbutton from '../assets/SVG/Hearthbutton.jsx'
import suma from '../assets/SVG/+.svg'
import tabletop from '../assets/SVG/tabletop.svg'
import download from '../assets/SVG/download.svg'
import resta from '../assets/SVG/resta.svg'
import { useState } from 'react'

export default function HomePage() {

    let coin = 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png'
    
    const [Read,setRead] = useState(false)
    const ReadMore = () => {
        setRead(!Read)
    }

    return (
        <div className='Main'>
            <div className="Homepage"> 
            <div className='Card-conteiner'>
                <div className='nav-card'>{'Store > Games > Stardew Valley'}</div>
                <div className='Card'>
                    <div>
                        <div className='image-conteiner'>
                            <img width={'100%'} src={stardew} alt='error'></img>
                        </div>
                        <div className='clasification'>
                            <img src='https://www.esrb.org/wp-content/uploads/2019/05/E10plus.svg' alt='error'></img>
                            <h4> Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood
                            </h4>   
                            <h4>Users Interact</h4>
                        </div>
                    </div>
                    <div className='Card-price'>
                        <h4>Nintendo Switch</h4>
                        <h3>Stardew Valley</h3>
                        <div>
                            <div>
                                <h3>$ 14.99 </h3>
                            </div>
                            <div className='iVkbLZ'>
                                <Hearthbutton/>
                            </div>
                        </div>
                        <div>
                            <img width={25} src={coin} alt='coin'></img><span>Eligible for up to 75 Gold Points</span>
                        </div>
                        <button>
                            <img className='download-img' src={download} alt='download-img'></img>
                            <span>
                                Direct Download
                            </span>
                        </button>
                        <span>This item will be sent to your system automatically after purchase.</span>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <div className='description-conteiner'>
                    <h2><b>You're moving to the valley...</b></h2>
            
                    <p>You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!
                    </p>
                    <p className={Read ? 'invisible' : 'visible'}>
                    Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience
                    </p>

                    <div className='read-more-button' onClick={ReadMore}>
                        <div className={Read ? 'visible' : 'invisible'}>
                            <img src={suma} alt='+'></img> 
                            <div className='read-more'> Read More </div>
                        </div>
                        <div className={Read ? 'invisible' : 'visible'}>
                            <img src={resta} alt='-'></img> 
                            <div className='read-more'> Read Less </div>
                        </div>
                    </div>

                    <span> Software description provided by the publisher.</span>

                    <button className='explore-button'>
                        Explore this game's official website
                    </button>
                    <img width={'100%'} src={stardew} alt='error'></img>
                </div>
                <div className='clasification-mobile'>
                    <h2>ESRB Rating</h2>
                    <a href='asd'>
                        <div className='ESRB-style'>
                            <div>
                                <img src='https://www.esrb.org/wp-content/uploads/2019/05/E10plus.svg' alt='error'></img>
                            </div>
                            <div className='ESRB-p'>
                                <div className='first-child'> Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood
                                </div>   
                                <div className='last-child'>Users Interact</div>
                            </div>
                        </div>
                    </a>          
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
                    <div className='charact-conteiner' >
                       <div className='characteristics'>
                            <img src={calender} alt='img'></img>
                            <div >
                                <h3> Release date </h3>
                                <div>October 5, 2017</div>
                            </div>
                       </div>
                       <div className='characteristics'>
                            <img src={players} alt='img'></img>
                            <div>
                                <h3> No. of players </h3>
                                <div className='chars-links'>
                                    <a href='https://robleslautaro.dev'>
                                        <span>
                                            Single System (1)
                                        </span>
                                        </a> 
                                    <a href='https://robleslautaro.dev'>
                                        <span>
                                            Local wireless (1)
                                        </span>
                                        </a> 
                                    <a href='https://robleslautaro.dev'> 
                                        <span>
                                            Online (1-4)
                                        </span>
                                     </a> 
                                </div>
                            </div>
                       </div>
                       <div className='characteristics'>
                            <Controller/>
                            <div>
                                <h3>Genre</h3>
                                <div className='chars-links'>
                                    <a href='https://robleslautaro.dev'>
                                    <span>
                                        Role-Playing
                                    </span>
                                    </a>
                                    <a href='https://robleslautaro.dev'>
                                        <span>
                                            Simulation
                                        </span>
                                        </a>
                                </div>
                            </div>
                       </div>
                       <div className='characteristics'>
                            <img src={building} alt='img'></img>
                            <div>
                                <h3>Publisher</h3>
                                <div className='chars-links'> <a href='https://robleslautaro.dev'> <span>ConcernedApe</span> </a></div>
                            </div>
                       </div>
                       <div className='characteristics'>
                            <img src={config} alt='img'></img>
                            <div>
                                <h3> ESRB rating </h3>
                                <div className='chars-links'> <a href='https://robleslautaro.dev'> <span>Everyone 10+</span> </a> </div>
                            </div>
                       </div>
                       <div className='characteristics'>
                            <img src={console} alt='img'></img>
                            <div>
                                <h3> Supported play modes </h3>
                                <div> TV mode, Tabletop mode, Handheld mode </div>
                            </div>
                       </div>
                       <div className='characteristics'>
                            <img src={memory} alt='img-memory'></img>
                            <div>
                                <h3> Game file size </h3>
                                <div> 1.5 GB </div>
                            </div>
                       </div>
                       <div className='characteristics'>
                            <img src={world} alt='img'></img>
                            <div>
                                <div> English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese </div>
                                <div> Supported languages </div>
                            </div>
                       </div>
                    </div>
                    <div className='online'>
                        <img src={online} width={'200px'} alt='online-err'></img>
                        <div>
                            <p className='online-text'><b>Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership. </b></p>
                            <p>This game supports: {<a href='https://robleslautaro.dev'><span>Online Play</span></a>}  {<a href='https://robleslautaro.dev'><span>Save Data Cloud</span></a>}</p>
                            <button className='learn-more'> Learn More </button>
                        </div>    
                    </div>
                    <div className='MoreLikethis'>
                        <div>
                            <h2 className='More'><b> More Like This </b></h2>
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
        </div>
        )
}