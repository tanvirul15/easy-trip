import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./component/homepage/Homepage";
import Login from "./component/login/Login";
import Navbar from "./component/navbar/Navbar";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import SearchPage from "./component/searchPage/SearchPage";
import Signup from "./component/signup/Signup";

export const userContext = createContext();
function App() {
  const [user, setUser] = useState({});
  return (
    <div className='App'>
      <Router>
        <Switch>
          <userContext.Provider value={[user, setUser]}>
            <Navbar />

            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <PrivateRoute path='/searchpage/:selectedVehicle'>
              <SearchPage />
            </PrivateRoute>
            <Route exact path='/'>
              <Homepage />
            </Route>
          </userContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
