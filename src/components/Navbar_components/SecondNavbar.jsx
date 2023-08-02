import { useState } from "react"
import Switch from "../../assets/SVG/switch"
import Speaker from "../../assets/SVG/speaker"
import Controller from "../../assets/SVG/controller"
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
            <button>My Nintendo Store</button>
            <button onClick={ShowDetails}>Games</button>
            <button>Nintendo Switch</button>
            <button>News & Events</button>
            <button>Play Nintendo</button>
          </div>
          
          <div className={Show ? 'Games-active' : 'Games-hidden'}>
            <div>
              <div>
                <button>
                  <Close></Close>
                </button>
              </div>
              <div className="Dropdown-buttons">
                  <div>
                    <button>
                      <div>
                        <Switch></Switch>
                      </div>
                      <p> Nintendo Switch Games </p>
                    </button>
                  </div>

                  <div>
                    <button>
                      <div>
                        <Speaker></Speaker>
                      </div>
                      <p> New Releases </p>
                    </button>
                  </div>

                  <div>
                    <button>
                      <div>
                        <Calender></Calender>
                      </div>
                      <p> Coming Soon </p>
                    </button>
                  </div>

                  <div>
                    <button>
                      <div>
                          <Controller></Controller>
                      </div>
                      <p> Shop Games </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
       
        </nav>
    )
}