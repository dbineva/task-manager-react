import React, { useState, useEffect } from 'react';
import { getUserById, saveUser } from '../../../core/api/users.api';
import { useHistory } from 'react-router-dom';
import './UserEdit.css';
import { Header } from '../../layout/header/Header';
import { Footer } from '../../layout/footer/Footer';

export function UserEdit(props) {
    console.log(props);
    const history = useHistory();
    const [editedUser, setEditedUser] = useState({ name: '', are: 0, password: '', isAdmin: false, isActive: false });
    const [error, setError] = useState('');

    useEffect(() => {
        if (props.computedMatch.params.id) {
            getUserById(props.computedMatch.params.id).then((currentUser) => {
                console.log("Here" + currentUser);
                setEditedUser(currentUser.data);
            });
        }
    }, {});

    const onInputChange = (event) => {
        event.persist();
        setEditedUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));

        if (error) {
            setError('');
        }
    }

    const onCheckBoxChange = (event) => {
        event.persist();

        setEditedUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.checked

        }));
        if (error) {
            setError("");
        }
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        saveUser(editedUser).then(() => {
            console.log('SUCCES');
            history.push('/users');
        })
            .catch((err) => setError(err.message))

    }


    return (
        <>
        <Header />
            <div className="user-edit-wrapper">
                <form action="" className="user-edit-form" onSubmit={onFormSubmit} >
                    {error && <span className="text-danger">{error}</span>}
                    <div className="form-group">
                        <label htmlFor="name" className="label-style">Name: </label>
                        <input type="text" name="name" id="name" className="form-control " onChange={onInputChange} value={editedUser.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="label-style">Email: </label>
                        <input type="email" name="email" id="email" className="form-control " onChange={onInputChange} value={editedUser.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="label-style">Password: </label>
                        <input type="password" name="password" id="password" className="form-control " onChange={onInputChange} value={editedUser.password} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age" className="label-style">Age: </label>
                        <input type="number" min="0" max="100" name="age" id="age" className="form-control " onChange={onInputChange} value={editedUser.age} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="isActive" className="label-style">Is Active: </label>
                        <input type="checkbox" name="isActive" id="isActive" className="form-control " onChange={onCheckBoxChange} checked={editedUser.isActive} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="isAdmin" className="label-style">Is Admin: </label>
                        <input type="checkbox" name="isAdmin" id="isAdmin" className="form-control " onChange={onCheckBoxChange} checked={editedUser.isAdmin} />
                    </div>
                    <button className="btn btn-primary btn-style">Save user</button>
                </form>
            </div>
            <Footer />
        </>
    )

}