import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './LandingPage.css'



const LandingPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://radiant-tor-84358.herokuapp.com/volun')
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
    }, [])

    return (
        <div>
            {
                user.map(user => {
                    console.log(user.name);
                })
            }
        </div>
    );
};

export default LandingPage;