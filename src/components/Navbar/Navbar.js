import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {myContext} from '../../context/context'
import AuthNavbar from './AuthNavbar'

const Navbar = () => {
    const context = useContext(myContext)
    let {authenticated} = context

    let content = authenticated ? (
        <AuthNavbar/>
    ) : (
        <nav className="navbar">
            <Link className="navbar__link" to="/signup">Signup</Link>
            <Link className="navbar__link" to="/login">Login</Link>
        </nav>
    )

    return content
}
export default Navbar
