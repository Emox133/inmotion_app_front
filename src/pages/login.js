import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {setAuthHeader} from '../utils/setAuthHeader'

const Login = props => {
    const [fields, setFields] = useState({
        email: '',
        password: ''
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
            email: fields.email,
            password: fields.password
        }

        axios.post('/users/login', {...data}).then(res => {
            console.log(res.data.token)
            setAuthHeader(res.data.token)
            props.history.push('/')
            props.history.go(0)
        }).catch(err => {
            console.log(err.response)
        })
    }

    return (
        <div className="login__container">
            <h1><strong>Login</strong></h1>
           <form className="form login__form" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email" onChange={handleChange} value={fields.email}/>
                <input type="password" name="password" placeholder="password" onChange={handleChange} value={fields.password}/>

                <button type="submit" className="btn btn-login btn--green">Submit</button>
           </form>
        </div>
    )
}

export default withRouter(Login)
