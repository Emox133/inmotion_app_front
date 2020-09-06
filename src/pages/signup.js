import React, {useState} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {setAuthHeader} from '../utils/setAuthHeader'

const Signup = props => {
    const [fields, setFields] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        role: ''
    })

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        let data = {
            firstName: fields.firstName,
            lastName: fields.lastName,
            email: fields.email,
            age: fields.age,
            password: fields.password,
            confirmPassword: fields.confirmPassword,
            role: fields.role
        }

        axios.post('/users/signup', data).then(res => {
            console.log(res)
            setAuthHeader(res.data.token)
            props.history.push('/posts')
            props.history.go(0)
        }).catch(err => {
            console.log(err.response)
            alert(err.response.data.message)
        })

    }


    return (
        <div className="signup__container">
            <h1>Signup</h1>
            <form className="form signup__form" onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="firstname" onChange={handleChange} value={fields.firstName}/>
                <input type="text" name="lastName" placeholder="lastname" onChange={handleChange} value={fields.lastName}/>
                <input type="email" name="email" placeholder="email" onChange={handleChange} value={fields.email}/>
                <input type="number" name="age" placeholder="age" onChange={handleChange} value={fields.age}/>
                <input type="password" name="password" placeholder="password" onChange={handleChange} value={fields.password}/>
                <input type="password" name="confirmPassword" placeholder="confirmPassword" onChange={handleChange} value={fields.confirmPassword}/>
                <input type="text" name="role" placeholder="role" onChange={handleChange} value={fields.role}/>

                <button type="submit" className="btn btn-signup btn--green">Submit</button>
            </form>
        </div>
    )
}

export default withRouter(Signup)
