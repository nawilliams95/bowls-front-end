import React from "react";

export default function LogInForm(props) {
  return (
    <div>
      <h2 style={{textAlign: 'center', fontSize: '30px', marginTop: '30px', marginBottom: '30px'}}>Log In</h2>

      <form>
        <div className='field' style={{width: '400px', display: 'block', margin: '0 auto'}}>
          <label className='label' htmlFor="email">
            Email
          </label>
          <div className='control'>
            <input className='input' type="text" name="email" placeholder='Type Your Email Here' onChange={props.handleInput} />
          </div>
        </div>
        <div className='field' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '20px'}}>
          <label className="label" htmlFor="password">Password</label>
          <div className='control'>
            <input className="input" type="password" name="password" placeholder='Type Your Password Here' onChange={props.handleInput} />
          </div>
        </div>
        <div className='control' style={{width: '400px', display: 'block', margin: '0 auto', marginTop: '30px', marginBottom: '30px'}}>
          <input className='button is-info' value="Submit" type="submit" onClick={props.handleLogIn} />
        </div>
      </form>
    </div>
  );
}




