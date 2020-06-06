import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';


export function UserCard({ user, onDelete }) {
  const loggedUser = getLoggedUser();

    return (
          
        <div className="card m-1" style={{width:"18rem"}}>
  <img className="card-img-top" src={user.picture} alt="Avatar"/>
  <div className="card-body">
    <h5 className="card-title"><Link to={`/users/${user.id}`}> {user.name}</Link></h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Age: {user.age}</li>
    <li className="list-group-item">Email: {user.email}</li>
  </ul>
  <div className="card-body">

    {loggedUser.isAdmin && <Link to={`/users/edit/${user.id}`} > Edit </Link>}
    {loggedUser.isAdmin && <div className="cursor-pointer" onClick={()=> onDelete(user.id)}>Delete</div>}
 
  </div>
</div>
    );
}