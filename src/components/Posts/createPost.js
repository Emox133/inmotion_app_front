import React, {useState} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const CreatePost = (props) => {
    let [fields, setFields] = useState({
        heading: '',
        content: ''
    })

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            heading: fields.heading,
            content: fields.content
        }

        axios.post('/posts', {...data}).then(res => {
            console.log(res)
            props.history.go(0)
        }).catch(err => {
            console.log(err.response)
        })
    }

    return (
        <div className="create-post__container">
            <h1><strong>Create Post</strong></h1>
            <form className="form create-post__form" onSubmit={handleSubmit}>
                <input type="text" placeholder="heading" name="heading" onChange={handleChange} value={fields.heading}/>
                <textarea type="text" placeholder="content" name="content" onChange={handleChange} value={fields.content}/>
                <button type="submit" className="btn btn--post">Submit</button>
            </form>
        </div>
    )
}

export default withRouter(CreatePost)
