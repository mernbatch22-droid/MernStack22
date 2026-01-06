import React, { useState } from 'react'
import "./Form.css"
function Form() {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    function printFormValue() {

        console.log(fName, lName, email, password)
    }
    return (
        <div className='form-container'>
            <h1> Form </h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                printFormValue()
            }} className='form'>
                <div className='form-group'>
                    <label htmlFor="firstName" className='form-label'>First Name</label>
                    <input
                        type="text"
                        id='firstName'
                        className='form-input'
                        placeholder='Enter Your Name'
                        value={fName}
                        name='fName'
                        onChange={(event) => {
                            setFName(event.target.value)
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName" className='form-label'>Last Name</label>
                    <input
                        type="text"
                        id='lastName'
                        className='form-input'
                        placeholder='Enter Your Last Name'
                        value={lName}
                        name='lName'
                        onChange={(event) => {
                            setLName(event.target.value)
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input
                        type="email"
                        id='email'
                        className='form-input'
                        placeholder='Enter Your Email'
                        value={email}
                        name='email'
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input
                        type="password"
                        id='password'
                        className='form-input'
                        placeholder='Enter Your Password'
                        value={password}
                        name='password'
                        onChange={(event) => {
                            setpassword(event.target.value)
                        }}
                    />
                </div>
                <button className='form-button'>Submit</button>
            </form>
        </div>
    )
}

export default Form