import React from 'react';
import { Redirect } from 'react-router-dom';
import {getLoggedUser} from '../api/users.api'

export function AuthenticatedRoute(props){
    const loggedUser = getLoggedUser();


    if(props.admin && loggedUser.isAdmin){
        return <props.component {...props} />
    }
    
    if(!props.admin && loggedUser){
        return <props.component {...props} />
    }
    return <Redirect to='/login' />; 
}