import React, {useContext, useRef, useState} from 'react'
import {myContext} from '../context/context'
import PanelUsers from './panelUsers'

const AdminPanel = () => {
    const [show, setShow] = useState(false)
    let context = useContext(myContext)
    let {getAllUsers, allUsers, logedInUser} = context
    const buttonEl = useRef(null)

    // const handleClick = () => {
    //     buttonEl.current.click()
    // }
    
    let adminPanelUsers = allUsers.map(user => {
        return <PanelUsers key={user.id} user={user} logedInUser={logedInUser}/>
    })

    const handleButton = () => {
        getAllUsers()
        setShow(true)
    }
    
    const toggleUsers = () => {
        setShow(!show)
    }

    const handleToggle = () => {
        allUsers.length === 0 ? alert('Cannot toggle users before calling them.') : toggleUsers()
    }

    return (
        <>
            <div>
                <h1>Admin Panel</h1>
                <button className="btn btn--users" ref={buttonEl} disabled={allUsers.length > 0} onClick={handleButton}>Get All Users</button>
                <button className="btn btn--toggle" onClick={handleToggle}>Toggle Users</button>
            </div>

            <div className={show ? 'panel__users' : 'panel__users--hiden'}>
                {adminPanelUsers}
            </div>
        </>
    )
}

export default AdminPanel
