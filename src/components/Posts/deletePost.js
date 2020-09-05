import React from 'react'
import axios from 'axios'

const DeletePost = (props) => {
    const handleDelete = () => {
        let id = props.postId

        axios.delete(`/posts/${id}`).then(res => {
            console.log(res)
            window.location.reload()
        }).catch(err => {
            console.log(err.response)
        })
    }

    return (
        <div>
            <button onClick={handleDelete} className="btn btn--delete">Delete</button>    
        </div>
    )
}

export default DeletePost
