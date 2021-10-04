import React , {useState} from "react";

function LoginForm({Login , error}) {
    const [details , setDetails] = useState({name:"" , email:"" , password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return(
        <form onSubmit={submitHandler} className="login-div">
                <div className="title">Create Account</div>
                {/* {(error !="")?(<div className="error">{error}</div>) : ""} */}
                <div class="fields">
                     <div class="your-email1">
                        <p>your email : </p>  
                     </div>     
                   <div class="your-email">
                        <i class="fas fa-envelope"></i>
                        <input type="username" name="name" class="user-input" placeholder="exp@company.com" onChange={e => setDetails({...details,name:e.target.value})} value={details.name}/>
                   </div>
                     <div class="password1">
                       <p> Password :</p>
                     </div>   
                   <div class="password">
                        
                        <i class="fas fa-unlock"></i>
                        <input type="password" class="pass-input" name="password"  onChange={e => setDetails({...details,password:e.target.value})} value={details.password}placeholder="password"/>
                   </div>
                      <div class="confirm">
                        <p>Confirm Password : </p>
                      </div>  
                   <div class="Confirm-Password">
                        <i class="fas fa-unlock"></i>
                        <input type="password" class="pass-input"  placeholder="Confirm Password"/>
                   </div>
                 {/* <input type="radio" class="option-input radio" name="gender"/>
                   <span>I agree to the terms and conditions</span> */}

                </div>
                <div className="cantener">
                    <div>
                        <label>
                            <input type="radio" name="age"/>
                            <i class="fas fa-check" area-hidden="true"></i>
                        </label>
                    </div>
                    <p>I agree to the terms and conditions</p>
                </div>  
                <div class="fields">
                    <div class="sign-in">
                        <button>Sign</button>
                    </div>
                    <p id="or">or</p>
                </div>  


                <div class="media-icons">
                    <div class="icon"><i class="fab fa-facebook-f"></i></div>
                    <div class="icon"><i class="fab fa-twitter"></i></div>
                    <div class="icon"><i class="fab fa-github"></i></div>
                </div>


                <div class="Ready">
                  <p>Already have an account?</p> 
                  <a href="#">Login here</a>
                </div>























                {/* <div className="radoi-btn">
                  <p>
                    <input type="radio" class="option-input radio" name="gender" value="I agree to the terms and conditions"/>
                    <span>I agree to the terms and conditions</span>
                  </p> 
                </div>    */}
                
                {/* <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details,name:e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details,email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Login"/>             */}

        </form>
    )
}


export default LoginForm;