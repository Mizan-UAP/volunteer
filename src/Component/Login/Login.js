import React, { useContext } from 'react';
import './Login.css'
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from '../logos/Group 1329.png'
import google from '../logos/google-logo.png'
import firebase from "firebase/app";
// import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }

    const handleSign = () => {


        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
         
            var { displayName, email } = result.user;
            const signedInUser = { Name: displayName, Email: email }
            setLoggedInUser(signedInUser)
            history.replace(from)


            
        }).catch((error) => {
            
            var errorCode = error.code;
            var errorMessage = error.message;           
            var email = error.email;            
            var credential = error.credential;
           
        });
    }
    return (
        <div>
            <section className="loginBody">
                <nav>
                    <header>
                        <Link to="/home">
                            <img src={logo} alt="logo" />
                        </Link>

                    </header>
                </nav>
                Name: {loggedInUser.Name} <br/>
                Email: {loggedInUser.Email}

                <div id="loginContainer">
                    <div className="loginContainer">
                        <h3>Login With</h3>
                        <span className="google" onClick={handleSign}>
                            <img src={google} alt="google" />
                            <label>Continue with Google</label>
                        </span>
                        <div className="create">
                            <span>Don't have an account?</span>
                            <Link to="/register"> Create an account</Link>
                        </div>
                    </div>
                </div>



            </section>
        </div>
    );
};

export default Login;