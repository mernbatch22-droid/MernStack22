import { useState } from "react"


function AdvanceForm() {


    const [formData, setFormData] = useState({

        completeName: "Mohan",
        email: "mohan@gmail.com",
        password: 1234,
        dob: "6 / 6 / 666",
        tob: "12.20",
        age: 20,
        searchItem: "Juba Kesari",
        resume: "",
        gender: "male",
        areaOfExperties: [],
        country: "india",
        suggestion: ""

    })




    function printValueOfForms(event) {
        event.preventDefault();
        console.log("All info of form", formData);

    }
    let oldData
    function formManagement(event) {
        // VALUE DESTRUCTURE FROM EVENT OBJECT


        const { name, value, checked, type } = event.target;

        console.log("checkbox ke bahar", oldData)
        if (type === "checkbox") {
            // you  are checking the checkbox means push karo value ko array ke andar 
            oldData = formData;
            if (checked) {
                formData.areaOfExperties.push(value);
                setFormData(oldData);
                console.log(oldData)
            }
            else{
                oldData = formData;
                oldData.areaOfExperties = formData.areaOfExperties.filter( (item)=> (item !== value));
                setFormData(oldData);
            }
        }


    
        else {
            setFormData((prev) => {
                return { ...prev, [name]: value }
            })
        }

    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={(event) => {
                printValueOfForms(event)
            }}>
                <h2 className="form-title">Registration Form</h2>

                <div className="form-group">
                    <label htmlFor="completeName">Complete Name</label>
                    <input type="text" id="completeName"
                        placeholder="Enter your complete name"
                        name="completeName"
                        value={formData?.completeName}
                        onChange={(event) => {
                            formManagement(event)

                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData?.email}
                        onChange={(event) => {
                            formManagement(event)

                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData?.password}
                        onChange={(event) => {
                            formManagement(event)

                        }}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob"
                            name="dob"
                            value={formData?.dob}
                            onChange={(event) => {
                                formManagement(event)

                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tob">Time of Birth</label>
                        <input type="time" id="tob"
                            name="tob"
                            value={formData?.tob}
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="age">Current Age</label>
                    <input type="number" id="age"
                        name="age"
                        value={formData?.age}
                        onChange={(event) => {
                            formManagement(event)

                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="searchItem">Search Item</label>
                    <input type="search" id="searchItem"
                        placeholder="Search here..."
                        name="searchItem"
                        value={formData?.searchItem}
                        onChange={(event) => {
                            formManagement(event)

                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="file">Choose Your Resume</label>
                    <input type="file" id="file"
                        name="resume"
                        value={formData?.resume}
                        onChange={(event) => {
                            formManagement(event)
                        }}
                    />
                </div>

                <div className="form-group">
                    <span className="group-title">Gender</span>
                    <div className="options">
                        <label htmlFor="male">Male</label>
                        <input type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            onChange={(event) => {
                                formManagement(event)

                            }} />


                        <label htmlFor="female"> Female</label>

                        <input type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                        <label htmlFor="others"> Others</label>


                        <input type="radio"
                            id="others"
                            name="gender"
                            value="others"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                    </div>
                </div>

                <div className="form-group">
                    <span className="group-title">Area of Expertise</span>
                    <div className="options">
                        <label htmlFor="c++"> c++</label>
                        <input type="checkbox"
                            id="c++"
                            name="areaOfExperties"
                            value="c++"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                        <label htmlFor="java"> java</label>
                        <input type="checkbox"
                            id="java"
                            name="areaOfExperties"
                            value="java"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                        <label htmlFor="dsa"> dsa</label>
                        <input type="checkbox"
                            id="dsa"
                            name="areaOfExperties"
                            value="dsa"
                            onChange={(event) => {
                                formManagement(event)

                            }} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Select your country</label>
                    <select
                        id="country"
                        name="country"
                        onChange={(event) => {
                            formManagement(event)

                        }} >
                        <option >Select option</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Russia">Russia</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="suggestion">Write your suggestion</label>
                    <textarea
                        id="suggestion"
                        placeholder="Ask questions..."
                        name="suggestion"
                        onChange={(event) => {
                            formManagement(event)
                        }}


                    ></textarea>
                </div>

                <button className="submit-btn">Submit</button>
            </form>
        </div>

    )
}

export default AdvanceForm