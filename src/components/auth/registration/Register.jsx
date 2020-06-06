import React, {Component} from 'react';
import './register.css'
import { register } from '../../../core/api/users.api';
import { Redirect, Link } from 'react-router-dom';


export class Register extends Component{

    constructor(props) {
        super(props);

        this.state={
            name:"",
            email:"",
            password: "",
            age: "",
            isRegistered: false,
            errorMesage: ''
        };
    }

    onInputChange=(event) =>{

        event.persist();
        this.setState({
            [event.target.name]: event.target.value,
            errorMesage: ""
        });
        console.log("onchange");

    }
    onSubmit = (event) => {
        console.log("tetss");
        event.preventDefault();
        console.log("tetss");
        const {isRegistered, ...user } = this.state;
        console.log(user);

        register(user).then(() =>{
            this.setState({
                isRegistered:true
            });
        })
        .catch((err) => this.setState({errorMesage: err.message}));

    };
    render(){
        return(
            <>
            {this.state.isRegistered && <Redirect to="/login" />}
        <div className="register-wrapper">
            <form className="register-form" onSubmit={this.onSubmit}>
                    {this.state.errorMesage && <span className="text-danger">{this.state.errorMesage}</span>}
                <div className="form-group" >
                    <label htmlFor="name" className="label-style">Name: </label>
                    <input type="text" name="name" id="name" className="form-control " onChange={this.onInputChange}  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label-style">Email: </label>
                    <input type="email" name="email" id="email" className="form-control " onChange={this.onInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="label-style">Password: </label>
                    <input type="password" name="password" id="password" className="form-control " onChange={this.onInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="age" className="label-style">Age: </label>
                    <input type="number" name="age" id="age" className="form-control " onChange={this.onInputChange} required/>
                </div>
                <button className="btn btn-success btn-style"  >Register</button>
                <Link to="/login" className="login-link">Already have an account?</Link>
            </form>
        </div>
        </>
        )}
}

