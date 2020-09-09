import React from "react";


export default function LogOut(props) {
  return (
    <div className="navbar-end">
      <div className="navbar-item auth">
        <div className="buttons">
          <strong>user</strong>	&nbsp;	&nbsp;
        <input value="Log Out" type="submit" onClick={props.handleLogOut} />
        </div>
      </div>
    </div>
  );
}

