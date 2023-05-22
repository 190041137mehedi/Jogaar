import React from "react";
import Navbar from "./components/Navigation/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/HomeMain";
import Error from "./pages/Error";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"

const App = () => {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;


/*
myenv\Scripts\activate
cd DjangoAPI
py manage.py runserver


py manage.py makemigrations
py manage.py migrate
py manage.py runserver
*/