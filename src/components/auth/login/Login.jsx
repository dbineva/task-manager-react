import React, {useState} from 'react';
import './login.css';
import { login } from '../../../core/api/users.api';
import { Redirect, Link } from 'react-router-dom';

export function Login(props){

const [userData, setUserData]= useState({});
const [isLoggedUser, setLoggedUser]= useState(false);
const [errorMesage,setErrorMessage]=useState("");
const onInputChange = (event) => {
    event.persist();
    console.log(event);

    setUserData((prevState) => ({
      ...prevState,
    [event.target.name]: event.target.value
          
    }));
    
    if(errorMesage){
    setErrorMessage("");
    console.log(userData);
    }
}
const onFormSubmit = (event) => {
    event.preventDefault();
 login(userData).then(()=>{
 console.log("Login SUCCESS");
 setLoggedUser(true);
 })
 .catch((err)=>setErrorMessage(err.message));
};
    return (
        <>
        { isLoggedUser && <Redirect to="/"/>}
        <div className="login-wrapper">
            <form  className="login-form" onSubmit={onFormSubmit}>
    {errorMesage  && <span className="text-danger">{errorMesage}</span>}
                <div className="form-group">
                    <label htmlFor="email" className="label-style">Email: </label>
                    <input type="email" name="email" id="email" className="form-control" onChange={onInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="label-style">Password: </label>
                    <input type="password" name="password" id="password" className="form-control" onChange={onInputChange}/>
                </div>
                <button className="btn btn-success btn-style">Login</button>
                <Link to="/register" className="register-link">Don't have an account?</Link>
            </form>
        </div>
        </>
    )
}