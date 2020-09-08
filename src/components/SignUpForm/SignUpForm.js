import React from "react";

function SignUpForm(props) {
  return (
    <div>
      <h2>Sign Up</h2>

      <form>
      <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" required onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" required onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="nickname">Nickname</label>
          <input type="text" name="nickname" onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" name="birthday" onChange={props.handleInput} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" required onChange={props.handleInput} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required onChange={props.handleInput} />
        </div>
        <input value="Submit" type="submit" onClick={props.handleSignUp} />
      </form>
    </div> 
  );
}

export default SignUpForm;
