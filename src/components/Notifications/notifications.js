import React from 'react'
import {RiHeartAddFill} from 'react-icons/ri'
// import {myContext} from '../../context/context'
import axios from 'axios'

const Notifications = (props) => {
    // let context = useContext(myContext)

    const handleNotifications = () => {
       let id = props.postOwner

       axios.post(`/users/${id}`).then(res => {
           console.log(res)
       }).catch(err => {
           console.log(err.response)
       })
    }

    return (
        <div>
            <RiHeartAddFill onClick={handleNotifications} className="notification__icon"/>
        </div>
    )
}

export default Notifications
