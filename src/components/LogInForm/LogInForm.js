import React from "react";

export default function LogInForm(props) {
  return (
    <div>
      <h2 style={{textAlign: 'center', fontSize: '30px', marginTop: '30px', marginBottom: '30px'}}>Log In</h2>

      <form>
        <div class='field' style={{width: '400px', display: 'block', margin: '0 auto'}}>
          <label class='label' htmlFor="email">
            Email
          </label>
          <div class='control'>
            <input class='input' type="text" name="email" placeholder='Type Your Email Here' onChange={props.handleInput} />
          </div>
        </div>
        <div class='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
          <label class="label" htmlFor="password">Password</label>
          <div class='control'>
            <input class="input" type="password" name="password" placeholder='Type Your Password Here' onChange={props.handleInput} />
          </div>
        </div>
        <div class='control' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '30px', marginBottom: '30px'}}>
          <input class='button is-info' value="Submit" type="submit" onClick={props.handleLogIn} />
        </div>
      </form>
    </div>
  );
}




