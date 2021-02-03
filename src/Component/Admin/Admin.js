import React, { useEffect, useState } from 'react';
import './Admin.css'
import { Link } from "react-router-dom";
import logo from '../logos/Group 1329.png'
import people from '../logos/users-alt 1.png'
import add from '../logos/plus 1.png'

const Admin = () => {

    const [registerList, setRegisterList] = useState({
        title: '',
        date: '',
        description: '',
        file: ''
    })

    const handleList = () => {
        document.getElementById('volunteerList').style.display = 'block';
        document.getElementById('addEvent').style.display = 'none';

    }
    const handleEvent = () => {
        document.getElementById('volunteerList').style.display = 'none';
        document.getElementById('addEvent').style.display = 'Block';

    }
    const handleRegister = (e) => {

        let newRegisterList = { ...registerList };
        newRegisterList[e.target.name] = e.target.value;
        setRegisterList(newRegisterList);
        console.log(newRegisterList);
        // console.log(e);

    }
    const handleSubmit = (e) => {

    }

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
            <nav>
                <header>
                    <div className="logo">
                        <Link to="/home">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <h2>Volunteer registhation list </h2>
                </header>
            </nav>
            <section className="adminBody">
                <div className="sidebar" id="sidebar">
                    <button onClick={handleList} id="volunteerListBtn">
                        <img src={people} alt="people" />
                        <span >
                            Volunteer registration list
                            </span>
                    </button>
                    <br /> <br />
                    <button onClick={handleEvent} id="addEventBtn">
                        <img src={add} alt="people" />
                        <span>
                            Add event
                            </span>
                    </button>

                </div>
                <div className="volunteerList" id="volunteerList">

                    {
                        user.map(user => {
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Registhation date</th>
                                    <th>Volunteer list</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>${user.name}</td>
                                    <td>${user.email}</td>
                                    <td>${user.phoneNumber}</td>
                                   
                                </tr>
                            </table>
                            

                        })
                    }


                </div>
                <div className="event" id="addEvent">
                    <div className="addEvent" >
                        <label >Event title</label>
                        <input type="text" onBlur={handleRegister} name="title" placeholder="Enter title" />
                        <label >Event date</label>
                        <input type="date" onBlur={handleRegister} name="date" placeholder="Enter date" />
                        <label >Event description</label>
                        <textarea onBlur={handleRegister} name="description" placeholder="Enter description" /> <br />
                        <label >Add image</label>
                        <input type="file" onBlur={handleRegister} name="file" placeholder="Enter title" />
                        <input type="submit" onClick={handleSubmit} value="Add Event" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admin;