import React, {useConte} from 'react'
import {VscBell} from 'react-icons/vsc'

const NotificationBell = (props) => {
    const notifications = props.notifications
    
    let content = notifications && notifications.length > 0 ?
        <div className="notification--parent">
            <VscBell className="notification--full" />
            <span className="notification--fill">{notifications.length}</span>    
        </div>
    : <VscBell className="notification--full"/>

    return (
        <div>
            {content}
        </div>
    )
}

export default NotificationBell
