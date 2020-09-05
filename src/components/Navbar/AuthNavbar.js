import React, {useContext, useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {myContext} from '../../context/context'
import CreatePost from '../Posts/createPost'
import NotificationBell from '../Notifications/notificationBell'

const AuthNavbar = (props) => {
    const [open, setOpen] = useState(false)
    let context = useContext(myContext)
    let {logout, logedInUser, notifications} = context

    const toggleOpen = () => {
        setOpen(!open)
    }

    let content = open ? (
        <button className="btn--close" onClick={toggleOpen}>&times;</button>
    ) : <button className="btn btn--create" onClick={toggleOpen}>+</button>

    let adminPanel = logedInUser[0] ? 
        logedInUser[0].role === 'admin' ? <Link className="navbar__link" to="/admin">Admin Panel</Link> : null
    : null

    return (
        <div>
            <nav className="navbar">
                <Link className="navbar__link" to="/">Home</Link>
                <Link className="navbar__link" to="/me">My Profile</Link>
                <NotificationBell notifications={notifications}/>
                {adminPanel}
                <button className="btn btn--logout" onClick={() => logout(props)}>Logout</button>
                {props.location.pathname === '/' ? content : null}
                {open && props.location.pathname === '/' ? <CreatePost /> : null}
            </nav>
        </div>
    )
}

export default withRouter(AuthNavbar)


