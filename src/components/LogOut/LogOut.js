import React from "react";


export default function LogOut(props) {
  let user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="navbar-end">
      <div className="navbar-item auth">
        <div className="buttons">
        {localStorage.length > 0 && <strong>Welcome Back {user.name}!	&nbsp; &nbsp;</strong>} 
          <form>
        <input value="Log Out" type="submit" onClick={props.handleLogOut} /></form>
        </div>
      </div>
    </div>
  );
}

