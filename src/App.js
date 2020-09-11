import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

import './css/App.css';
import Layout from './components/Layout/Layout.js';
import "./css/App.css";
import SignUpForm from './components/SignUpForm/SignUpForm';
import LogInForm from './components/LogInForm/LogInForm';
import LogOut from './components/LogOut/LogOut';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import CreateBowl from './components/OrderNow/CreateBowl';
import SigBowls from './components/OrderNow/SigBowls';
import OrderNow from './components/OrderNow/OrderNow';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import ContactUsForm from './components/ContactUs/ContactUsForm';
import Account from './components/UserProfile/Account';
import YourBowls from './components/UserProfile/YourBowls';
import Edit from './components/UserProfile/Edit';
import SplashPage from './components/SplashPage/SplashPage';

export default function App(props) {

  let history = useHistory();

  const [enter, updateEnter] = useState(false);

  const [state, setState] = useState({
    email: '',
    password: '',
    isLogginIn: false
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [input, updateInput] = useState({
  //   firstName: '',
  //   email: '',
  //   password: '',
  //   confirm_password: ''
  // });
  // const [errors, updateErrors] = useState({});


  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({

      email: '',
      password: '',
      isLoggedIn: false
    });
    history.push('/home');
    localStorage.clear();
  };

  const handleInput = event => {
    setState({ ...state, [event.target.name]: event.target.value });
    // updateInput({ ...input, [event.target.name]: event.target.value });
  };
  // const validate = () => {
  //       let isValid = true;

  //       if (!input.firstName) {
  //         isValid = false;
  //         errors.firstName = "Please enter your name.";
  //       }

  //       if (!input.email) {
  //         isValid = false;
  //         errors.email = "Please enter your email Address.";
  //       }

  //       if (typeof input.email !== "undefined") {

  //         let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //         if (!pattern.test(input.email)) {
  //           isValid = false;
  //           errors.email = "Please enter valid email address.";
  //         }
  //       }

  //       if (!input.password) {
  //         isValid = false;
  //         errors.password = "Please enter your password.";
  //       }

  //       if (!input.confirm_password) {
  //         isValid = false;
  //         errors.confirm_password = "Please enter your confirm password.";
  //       }

  //       if (typeof input.password !== "undefined" && typeof input.confirm_password !== "undefined") {

  //         if (input.password != input.confirm_password) {
  //           isValid = false;
  //           errors.password = "Passwords don't match.";
  //         }
  //       }

  //       updateErrors({
  //         errors: errors
  //       });

  //       return isValid;
  //     };

  const handleSignUp = async event => {
    event.preventDefault();
    // validate();
    try {
      const response = await axios.post('http://localhost:8000/users/signup', {
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        nickname: state.nickname,
        birthday: state.birthday,

      });
      console.log(response);
      localStorage.token = response.data.token;
      response.data.currentUser = localStorage.setItem('user', JSON.stringify(response.data.currentUser));
      setIsLoggedIn("true");
      updateEnter(true);
      history.push('/home');
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogIn = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users/login', {
        email: state.email,
        password: state.password
      });
      localStorage.token = response.data.token;
      response.data.currentUser = localStorage.setItem('user', JSON.stringify(response.data.currentUser));
      setIsLoggedIn(true);
      updateEnter(true);
      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };
  const handleEnter = event => {
    event.preventDefault();
    updateEnter(true);
    history.push('/home')
  }

  return (
    <Layout isLoggedIn={isLoggedIn}>
      {/* {enter === false && <SplashPage handleEnter={handleEnter} />} */}
      
        <NavBar isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
      <div className="body">
        <Switch>
          <Route
            path="/signup"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                // errors={errors}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return (
                <LogOut isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
              );
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              return (
                <LogInForm
                  handleEnter={handleEnter}
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/home"
            render={(props) => {
              return <Home />;
            }}
          />
          {enter === false && <Route
            exact path="/"
            render={(props) => {
              return <SplashPage handleEnter={handleEnter} />;
            }}
          />}
          <Route
            path="/createbowl"
            render={(props) => {
              return <CreateBowl />;
            }}
          />
          <Route
            path="/ordernow"
            render={(props) => {
              return <OrderNow />;
            }}
          />
          <Route
            path="/about"
            render={(props) => {
              return <AboutUs />;
            }}
          />
          <Route
            path="/contact"
            render={(props) => {
              return <ContactUs />;
            }}
          />
          <Route
            path="/sigbowls"
            render={props => {
              return <SigBowls />;
            }}
          />
          <Route
            path="/contactusform"
            render={(props) => {
              return <ContactUsForm />
            }}
          />
          <Route
            path="/account"
            render={(props) => {
              return <Account />
            }}
          />
          <Route
            path="/yourbowls"
            render={(props) => {
              return <YourBowls />
            }}
          />
          <Route
            path="/:id"
            render={props => {
              return <Edit {...props} />;
            }}
          />

        </Switch>
      </div>
    </Layout>
  );
}


