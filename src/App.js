import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Admin from './Component/Admin/Admin';
import Register from './Component/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import LandingPage from './Component/LandingPage/LandingPage';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">


      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>


        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/landingPage">
              <LandingPage />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
