import React, { useContext } from 'react';
import './Home.css'
import logo from '../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import { UserContext } from '../../App';



const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 


    // const handleClick = () => {
    //   console.log('Clicked');
    // }
    
    return (
        <div>
            <nav>
                <header>
                    <div className="logo">
                        <Link to="/home">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="menu">
                        <a href="home">Home</a>
                        <a href="donation">Donation</a>
                        <a href="event">Event</a>
                        <a href="blog">Blog</a>
                        <Link to="/login">LogIn</Link>
                        <Link to="/admin">Admin</Link>



                    </div>
                </header>
            </nav>
            {/* onClick={ handleClick} */}

            Name: {loggedInUser.Name} <br/>




            <button >
                <Link to="/landingPage">
                   photo details
                </Link>              
            </button>

        </div>
    );
};

export default Home;