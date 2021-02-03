import React, { useState } from 'react';
import './Register.css'
import { Link } from "react-router-dom";
import logo from '../logos/Group 1329.png'

const Register = () => {
    const [user,setUser] = useState({
        name: '',
        email: '',
        date: '',
        description: '',
        libraryBooks: '',
    })

    const handleInput = (e) => {
      
        let newUserData = {...user};
        newUserData[e.target.name] = e.target.value;
        setUser(newUserData);
        
    }
    const handleSubmit = (e) => {
        console.log('submitting');
       console.log(user);
       e.preventDefault();  
       
    }

    return (
        <div>
            <section className="registerBody">
                <nav>
                    <header>
                        <Link to="/home">
                            <img src={logo} alt="logo" />
                        </Link>
                    </header>
                </nav>
                <div id="registerContainer">
                    <div className="registerContainer">
                        <h3>Register as a Volunteer</h3>
                        <form className="form-control">
                            <input type="text" onBlur={handleInput} name="name" placeholder="Full Name" required/>
                            <input type="text" onBlur={handleInput} name="email" placeholder="Username or Email" required />
                            <input type="date" onBlur={handleInput} name="date" placeholder="Date" required/>
                            <input type="text" onBlur={handleInput} name="description" placeholder="Description" required />
                            <input type="text" onBlur={handleInput} name="libraryBooks" placeholder="Organize books at the library" required/>                           
                            <input type="submit" onClick={handleSubmit} value="Register" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Register;