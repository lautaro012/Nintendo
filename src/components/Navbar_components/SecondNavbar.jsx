import { useState } from "react"
import Switch from "../../assets/SVG/switch"
import Speaker from "../../assets/SVG/speaker"
import Controller from "../../assets/SVG/controller.jsx"
import Calender from "../../assets/SVG/calender"
import Close from "../../assets/SVG/close"
import Test from '../../assets/SVG/test.jsx'
import News from '../../assets/SVG/news.jsx'
import Star from '../../assets/SVG/Star.jsx'

export default function SecondNavbar () {

  const [Show, setShow] = useState(false)
  function ShowDetails () {
    setShow(!Show)
  }

    return (
        <nav className="SecondNavbar">
          <div className="SecondNavBar-ButtonConteiner">
            <div className="SecondNavBar-buttons">
              <div>
                <Test className='truck'/>
                <span>
                  My Nintendo Store
                </span>
                </div>
              <div onClick={ShowDetails}>
                <Controller/>
                <span>
                  Games
                </span>
                </div>
              <div>
                <Switch/>
                <span>
                  Nintendo Switch
                </span>
              </div>
              <div>
                <News/>
                <span>
                  News & Events
                </span>
              </div>
              <div>
                <Star></Star>
                <span>
                  Play Nintendo
                </span>
              </div>
            </div>
          </div>
          
          <div className={Show ? 'Games-active' : 'Games-hidden'}>
            <div>
              <div>
                <div>
                  <Close></Close>
                </div>
              </div>
              <div className="Dropdown-buttons">
                  <div>
                    <div>
                      <div>
                        <Switch></Switch>
                      </div>
                      <p> Nintendo Switch Games </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <Speaker></Speaker>
                      </div>
                      <p> New Releases </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <Calender></Calender>
                      </div>
                      <p> Coming Soon </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <Controller/>
                      </div>
                      <p> Shop Games </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
        </nav>
    )
}