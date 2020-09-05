import React, {useContext} from 'react'
import EditPost from '../components/Posts/editPost'
import {myContext} from '../context/context'
import DeletePost from '../components/Posts/deletePost'
import Notifications from '../components/Notifications/notifications'

const Post = props => {
    const context = useContext(myContext)
    let {logedInUser} = context

    let contentEdit = logedInUser[0] ? 
        props.post.postOwner === logedInUser[0].id ? <EditPost postId={props.post.id} /> : null 
    : null
    let contentDelete = logedInUser[0] ?
        props.post.postOwner === logedInUser[0].id ? <DeletePost postId={props.post.id} /> : null
    : null

    let contentNotify = logedInUser[0] ?
        props.post.postOwner !== logedInUser[0].id ? <Notifications postOwner={props.post.postOwner} /> : null
    : null

    return (
        <div className="post">
            <h1>{props.post.heading}</h1>
            <p>{props.post.content}</p>
            <div className="flex__fast">
            {contentEdit}
            {contentDelete}
            </div>
            {contentNotify}
        </div>
    )
}

export default Post
