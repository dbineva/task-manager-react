import React from 'react';
import { Switch } from 'react-router-dom';
import { UsersList } from '../../users/users-list/UsersList';
import { User } from '../../users/user/User';
import { AuthenticatedRoute } from '../../../core/guards/AuthenticatedRoute';
import { UserEdit } from '../../users/user-edit/UserEdit';
import { Login } from '../../auth/login/Login';
import { Register } from '../../auth/registration/Register';
import { NotesList } from '../../notes/notest-list/NotesList';
import { MyNotes } from '../../notes/my-notes/MyNotes';
import { NoteEdit } from '../../notes/edit/NoteEdit';



 export function Main({count}){
     
return (
    <div className="main-content">
        <Switch>

         {/* <AuthenticatedRoute exact path="/users/create" admin={true} component={UserEdit} />
        <AuthenticatedRoute exact path="/users" component={UsersList} />
        <AuthenticatedRoute exact path="/users/:id" component={User} />
        <AuthenticatedRoute exact path="/users/edit/:id" admin={true} component={UserEdit} />

        <AuthenticatedRoute exact path="/notes" component={NotesList} />
        <AuthenticatedRoute exact path="/notes/my-notes" component={MyNotes} />
        <AuthenticatedRoute exact path="/notes/create" component={NoteEdit} />
        <AuthenticatedRoute exact path="/notes/edit/:id" component={NoteEdit} />  */}


        </Switch>
       </div>
);
}
