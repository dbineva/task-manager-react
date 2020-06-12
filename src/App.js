import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Switch } from "react-router-dom";
import { Login } from "./components/auth/login/Login";
import { AuthenticatedRoute } from "./core/guards/AuthenticatedRoute";
import { NonAuthenticatedRoute } from "./core/guards/NonAuthenticatedRoute";
import { Register } from "./components/auth/registration/Register";
import { UsersList } from './components/users/users-list/UsersList';
import { User } from './components/users/user/User';
import { UserEdit } from './components/users/user-edit/UserEdit';
import { NotesList } from "./components/notes/notest-list/NotesList";
import { NoteEdit } from "./components/notes/edit/NoteEdit";
import { MyNotes } from "./components/notes/my-notes/MyNotes";


function App() {
  return (
    <div className="App">
      <Switch>
         <NonAuthenticatedRoute  exact path="/login" component={Login} />
        <NonAuthenticatedRoute exact path="/register" component={Register} />
        <AuthenticatedRoute exact path="/" component={Layout} />

          <AuthenticatedRoute exact path="/users/create" admin={true} component={UserEdit} />
        <AuthenticatedRoute exact path="/users" component={UsersList} />
        <AuthenticatedRoute exact path="/users/:id" component={User} />
        <AuthenticatedRoute exact path="/users/edit/:id" admin={true} component={UserEdit} />

        <AuthenticatedRoute exact path="/notes" component={NotesList} />
        <AuthenticatedRoute exact path="/notes/my-notes" component={MyNotes} />
        <AuthenticatedRoute exact path="/notes/create" component={NoteEdit} />
        <AuthenticatedRoute exact path="/notes/edit/:id" component={NoteEdit} />   

      </Switch>
    </div>
  );
}

export default App;
