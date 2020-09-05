import React, {useState} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const EditPost = props => {
    const [fields, setFields] = useState({
        heading: '',
        content: ''
    })
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

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

        let id = props.postId

        axios.patch(`/posts/${id}`, data).then(res => {
            console.log(res)
            props.history.go(0)
        }).catch(err => {
            console.log(err.response)
        })
    }

    let isOpen = open ? (
        <div className="edit-form__container">
            <button onClick={toggleOpen}>&times;</button>
            <form className="form edit-post__form" onSubmit={handleSubmit}>
                <input type="text" name="heading" placeholder="heading" onChange={handleChange} value={fields.heading}/>
                <textarea type="text" name="content" placeholder="content" onChange={handleChange} value={fields.content}/>
                <button type="submit"  className="btn edit--btn">Submit</button>
            </form>
        </div>
    ) : <button className="btn btn--edit" onClick={toggleOpen}>Edit</button>

    return isOpen
}

export default withRouter(EditPost)
