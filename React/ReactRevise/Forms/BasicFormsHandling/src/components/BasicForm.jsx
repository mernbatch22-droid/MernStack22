import { useState } from "react"


function BasicForm() {

    const [completeName, setCompleteName] = useState("Mohan");
    const [email, setEmail] = useState("mohan@gmail.com");
    const [password, setPassword] = useState(1234);
    const [dob, setDob] = useState(6 / 6 / 666);
    const [tob, setTob] = useState(12.30);
    const [age, setAge] = useState(25);
    const [searchItem, setSearchItem] = useState("sabun");
    const [resume, setResume] = useState();
    const [gender, setGender] = useState("male");
    let [areaOfExperties, setAreaOfExperties] = useState([]);
    const [country, setCountry] = useState("india");
    const [suggestion, setSuggestion] = useState("achhe se padhao")



    


    function printValueOfForms(event) {
        event.preventDefault();
        console.log("All info of form")
        // console.log("completeName:", completeName)
        // console.log("email:", email)
        // console.log("password:", password)
        // console.log("dob:", dob)
        // console.log("time of birth:", tob)
        // console.log("Age :", age)
        // console.log("search item:", searchItem)
        // console.log("resume file :", resume)
        // console.log("gender:", gender)
        // console.log("areaOfExperties :", areaOfExperties)
        // console.log("country:", country)
        // console.log("suggestion:", suggestion)
        const data = {
            completeName, email, password, dob, tob, age, searchItem, resume, gender, areaOfExperties, country, suggestion
        }
        console.log(data)
    }

    function handleCheckBox(event) {
        console.log("ham call ho rhe hai")
        const { value, checked } = event.target;
        console.log(value, checked)

        if (checked) {
            areaOfExperties = areaOfExperties;
            areaOfExperties.push(value)
            setAreaOfExperties(areaOfExperties)
        }
        else {
            areaOfExperties = areaOfExperties.filter((item) => item !== value)
            setAreaOfExperties(areaOfExperties)
        }
        console.log("defaultareaof expeties", areaOfExperties)
    }


    let oldData;
    console.log(oldData)
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
                        value={completeName}
                        onChange={(event) => {
                            // console.log(event.target)
                            // console.log(event.target.value)
                            setCompleteName(event.target.value)
                        }} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob"
                            name="dob"
                            value={dob}
                            onChange={(event) => setDob(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tob">Time of Birth</label>
                        <input type="time" id="tob"
                            name="tob"
                            value={tob}
                            onChange={(event) => setTob(event.target.value)} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="age">Current Age</label>
                    <input type="number" id="age"
                        name="age"
                        value={age}
                        onChange={(event) => setAge(event.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="searchItem">Search Item</label>
                    <input type="search" id="searchItem"
                        placeholder="Search here..."
                        name="searchItem"
                        value={searchItem}
                        onChange={(event) => setSearchItem(event.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="file">Choose Your Resume</label>
                    <input type="file" id="file"
                        name="resume"
                        value={resume}
                        onChange={(event) => setResume(event.target.value)}
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
                                setGender(event.target.value)
                            }} />


                        <label htmlFor="female"> Female</label>

                        <input type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={(event) => {
                                setGender(event.target.value)
                            }} />
                        <label htmlFor="others"> Others</label>


                        <input type="radio"
                            id="others"
                            name="gender"
                            value="others"
                            onChange={(event) => {
                                setGender(event.target.value)
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
                                handleCheckBox(event)
                            }} />
                        <label htmlFor="java"> java</label>
                        <input type="checkbox"
                            id="java"
                            name="areaOfExperties"
                            value="java"
                            onChange={(event) => {
                                handleCheckBox(event)
                            }} />
                        <label htmlFor="dsa"> dsa</label>
                        <input type="checkbox"
                            id="dsa"
                            name="areaOfExperties"
                            value="dsa"
                            onChange={(event) => {
                                handleCheckBox(event)
                            }} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Select your country</label>
                    <select
                        id="country"
                        name="country"
                        onChange={(event) => {
                            setCountry(event.target.value)
                        }}>
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
                            setSuggestion(event.target.value)
                        }}


                    ></textarea>
                </div>

                <button className="submit-btn">Submit</button>
            </form>
        </div>

    )
}

export default BasicForm