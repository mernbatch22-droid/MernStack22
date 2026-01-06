import React, { useState } from 'react'
import "./Form.css"
function BestForm() {

    const [valueOfForm, setValueofForm] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        brand: ""
    })



    function setFormData(event) {

        const { name, value } = event.target;
        setValueofForm((prev) => {
            return { ...prev, [name]: value }
        })
    }






    function printFormValue() {
        console.log(valueOfForm)
    }
    return (
        <div className='form-container'>
            <h1>Best form </h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                printFormValue()
            }} className='form'>
                <div className='form-group'>
                    <label htmlFor="fName" className='form-label'>First Name</label>
                    <input
                        type="text"
                        id='fName'
                        className='form-input'
                        placeholder='Enter Your Name'
                        value={valueOfForm.fName}
                        name="fName"
                        onChange={(event) => {
                            setFormData(event)
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="lName" className='form-label'>Last Name</label>
                    <input
                        type="text"
                        id='lName'
                        className='form-input'
                        placeholder='Enter Your Last Name'
                        value={valueOfForm.lName}
                        name="lName"
                        onChange={(event) => {
                            setFormData(event)
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
                        value={valueOfForm.email}
                        name="email"
                        onChange={(event) => {
                            setFormData(event)
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
                        value={valueOfForm.password}
                        name="password"
                        onChange={(event) => {
                            setFormData(event)
                        }}
                    />
                </div>
                <div>
                    <select name="brand" id="brand" onChange={(event) => setFormData(event)}>
                        <option>Select Options</option>
                        <option value="Balinbo ">Balinbo</option>
                        <option value="Nano">Nano</option>
                        <option value="Jipsy">Jipsy</option>
                        <option value="Thar">Thar</option>
                    </select>
                </div>

                <textarea name="about" id="about" onChange={(eve)=>{
                    setFormData(eve)
                }} ></textarea>
                <button className='form-button'>Submit</button>
            </form>
        </div>
    )
}

export default BestForm
