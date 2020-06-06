import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';
import { NoteStatus } from './../../../core/api/notes.api';


const noteStyle = {
    maxWidth: '18rem'
};

const deleteBtn = {
    cursor: 'pointer'
};

export function NoteCard({ note, onDeleteClick }) {

    const loggedUser = getLoggedUser();

    let noteClassByType = "";
    switch (note.status) {
        case NoteStatus.Active:
            noteClassByType += "bg-warning m-3";
            break;
        case NoteStatus.Done:
            noteClassByType += "bg-info m-3";
            break;
        case NoteStatus.Pending:
            noteClassByType += "bg-danger m-3";
            break;
        default:
            noteClassByType += "bg-warning m-3";
            break;
    }

    return (
         //<div className={'bg-warning m-3'} style={noteStyle}>
        <div className={noteClassByType} style={noteStyle}>
                <div className="card-header">
                    <p> {note.title} </p>
                </div>
                <div className="card-body">
                    <p className="card-text">{note.content}</p>
                </div>
                <div className="card-footer bg-transparent ">
                    <div>Author: {note.authorName}</div>
                    <div>Created on: {note.date}</div>
                </div>
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span className='logout-btn btn btn-dark h-3 '><Link to={`/notes/edit/${note.id}`} > Edit </Link></span>}
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span className='logout-btn btn btn-dark ml-sm-2 ' style={deleteBtn} onClick={() => onDeleteClick(note.id)}> Delete</span>}
            </div>
    )
}