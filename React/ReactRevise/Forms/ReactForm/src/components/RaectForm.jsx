
import { useForm, } from "react-hook-form"

function RaectForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();





    function printValue(data){
        console.log(data)
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit(printValue)}>
                <h2 className="form-title">Registration Form</h2>

                <div className="form-group">
                    <label>Complete Name</label>
                    <input
                        placeholder="Enter your complete name"
                        {...register("completeName",{required:"complete name is man"},{minLength:3})}
                    />
                   {
                    errors.completeName&& <span style={{color:"red"}}>{errors.completeName.message}</span>
                   }
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        placeholder="Enter your email"
                        {...register("email",{required:"email  is man"},{minLength:3})}

                    />
                      {
                    errors.email&& <span style={{color:"red"}}>{errors.email.message}</span>
                   }
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        placeholder="Enter your password"
                        {...register("password",{required:"pass  is man"},{minLength:3})}

                    />
                      {
                    errors.password&& <span style={{color:"red"}}>{errors.password.message}</span>
                   }
                </div>



                <button className="submit-btn">Submit</button>
            </form>
        </div>

    )
}

export default RaectForm