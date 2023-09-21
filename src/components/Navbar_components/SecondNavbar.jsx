import { useState } from "react"
import Switch from "../../assets/SVG/switch"
import Speaker from "../../assets/SVG/speaker"
import Controller from "../../assets/SVG/controller.svg"
import Calender from "../../assets/SVG/calender"
import Close from "../../assets/SVG/close"

export default function SecondNavbar () {

  const [Show, setShow] = useState(false)
  function ShowDetails () {
    setShow(!Show)
  }

    return (
        <nav className="SecondNavbar">
          <div>
            <div>My Nintendo Store</div>
            <div onClick={ShowDetails}>Games</div>
            <div>Nintendo Switch</div>
            <div>News & Events</div>
            <div>Play Nintendo</div>
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
                        <img src={Controller} alt=''></img>
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