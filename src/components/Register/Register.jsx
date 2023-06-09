import React from 'react'
import { useState } from 'react'
import Register_input from './Register_input'
import './register.css'
import Footer from '../Footer/Footer'
//import {useNavigate} from 'react-router-dom'

const Register = () => {


  const [values, setValues] = useState(
    {
      name: "",
      email: "",
      password: "",
      confirm: "",
      contact: ""
    }
  );

  //const history =useNavigate();

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name"

    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email"

    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password"

    },
    {
      id: 4,
      name: "confirm",
      type: "password",
      placeholder: "Confirm password",
      label: "Confirm Password"

    },
    {
      id: 5,
      name: "contact",
      type: "text",
      placeholder: "Contact",
      label: "Contact"

    }

  ]

  // const navigate = useNavigate()

  async function signUp() {
    let requestModel = {
      name: values.name,
      email: values.email,
      password: values.password
    }
    console.log("hello!");
    console.log("requestModel ->", requestModel);


    const settings = {
      method: 'POST',
      body: JSON.stringify(requestModel),
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    };

    try {
      const fetchResponse = await fetch("http://127.0.0.1:8000/users", settings);
      const result = await fetchResponse.json();
      // localStorage.setItem("user-info",JSON.stringify(result))
      // history("/")
      return result;
    } catch (e) {
      return e;
    }


  }


  const handleSubmit = (e) => {

    // if(values.password!==values.confirm)
    // {
    //   alert("Password doesn't match!");
    // }
    // else{
    alert('A form was submitted with Name :"' + values.name +
      '" + Email :"' + values.email + '" and Contact :"' + values.contact + '"');

    // }

    e.preventDefault();

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values)
  return (
    <div className='login'>
      <h1><b>Register</b></h1>
      <form onSubmit={handleSubmit}>

        {inputs?.map((input) => (
          <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
        ))}
        <br /><button className='signup' onClick={signUp}>Register</button><br /><br />
        <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
        <br />
        <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p>
      </form>
      <Footer />
    </div>
  )
}


export default Register