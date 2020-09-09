import React from "react";

export default function SignUpForm(props) {
  return (
    <div>
      <h2 style={{textAlign: 'center', fontSize: '30px', marginTop: '30px', marginBottom: '30px'}}>Sign Up</h2>

      <form>
        <div class='field' style={{width: '400px', display: 'block', margin: '0 auto'}}>
            <label htmlFor="firstName" class='label' htmlFor="firstName">First Name</label>
            <input class='input' type="text" name="firstName" placeholder='Type Your First Name Here' required onChange={props.handleInput} />
          </div>
          <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
            <label htmlFor="lastName" class='label' htmlFor="lastName">Last Name</label>
            <input class='input' type="text" name="lastName" placeholder='Type Your Last Name Here' required onChange={props.handleInput} />
          </div>
          <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
            <label htmlFor="firstName" class='label' htmlFor="nickname">Nickname</label>
            <input class='input' type="text" name="nickname" placeholder='Type Your Nickname Here' required onChange={props.handleInput} />
          </div>
          <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
            <label htmlFor="birthday" class='label' htmlFor="birthday">Birthday</label>
            <input class='input' type="date" name="birthday" required onChange={props.handleInput} />
          </div>
          <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
            <label htmlFor="email" class='label' htmlFor="email">Email</label>
            <input class='input' type="email" name="email" placeholder='Type Your Email Here' required onChange={props.handleInput} />
          </div>
          <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
            <label htmlFor="password" class='label' htmlFor="password">Password</label>
            <input class='input' type="text" name="password" placeholder='Type Your Password Here' required onChange={props.handleInput} />
          </div>
          <div class='control' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '30px', marginBottom: '30px'}}>
          <input class='button is-info' value="Submit" type="submit" onClick={props.handleSignUp} />
        </div>
      </form>
    </div> 
  );
}


