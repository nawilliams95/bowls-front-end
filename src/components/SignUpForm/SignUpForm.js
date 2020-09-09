import React from "react";

export default function SignUpForm(props) {
  return (
    <div>
      <h2>Sign Up</h2>

      <form>
      <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName"  onChange={props.handleInput} />
        </div>
        
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName"  onChange={props.handleInput} />
          {/* <div className="text-danger">{props.errors.firstName}</div> */}
        </div>
        <div>
          <label htmlFor="nickname">Nickname</label>
          <input type="text" name="nickname" id="nickname" onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" name="birthday" id="birthday" onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"  onChange={props.handleInput} />
          {/* <div className="text-danger">{props.errors.email}</div> */}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"  onChange={props.handleInput} />
          {/* <div className="text-danger">{props.errors.password}</div> */}
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="confirm_password" name="confirm_password" id="confirm_password"  onChange={props.handleInput} />
          {/* <div className="text-danger">{props.errors.confirm_password}</div> */}
        </div>
        <input value="Submit" type="submit" onClick={props.handleSignUp} />
      </form>
    </div> 
  );
}


