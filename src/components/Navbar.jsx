import MainNavbar from './Navbar_components/MainNavbar'
import SecondNavbar from './Navbar_components/SecondNavbar'
import Announce1 from './Navbar_components/Announce1'
import Announce2 from './Navbar_components/Announce2'
import './Navbar_components/Navbar.css'

export default function Navbar() {

    return (
        <>
            <MainNavbar></MainNavbar>
            <SecondNavbar></SecondNavbar>
            <Announce1></Announce1>
            <Announce2></Announce2>
        </>
        )
}