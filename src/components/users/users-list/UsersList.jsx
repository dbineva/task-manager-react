import React, { useEffect, useState } from 'react';
import {getAllUsers, deleteUser, getLoggedUser} from './../../../core/api/users.api'
import { UserCard } from '../user-card/UserCard';
import { Header } from '../../layout/header/Header';
import { Footer } from '../../layout/footer/Footer';
const currentUser= getLoggedUser();


export function UsersList(props){

const [users, setUsers] = useState([]);
    useEffect(() =>{
        const searcParam = props.location.search.split('=')[1];
        getAllUsers(searcParam).then((allUsers) => {
            console.log(allUsers);
            setUsers(allUsers.filter(u => u.id !== currentUser.id));
        });
    },[props.location.search]);

    const onUserDelete = (id) =>{
        deleteUser(id).then(() => {
          setUsers((prevState) =>{
              return prevState.filter(u =>u.id !==id);
          })
        })
        .catch((err) => console.log(err));
    }

    return(
        <>
        <Header />
        <div className="users-list d-flex" style={{flexWrap:'wrap'}}>
            {users.map((user) => <UserCard user={user} key={user.id} onDelete = {onUserDelete}/>)} 
        </div>
        <Footer />
        </>
    );
}