import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';
import { NoteStatus, NoteVote } from './../../../core/api/notes.api';


const noteStyle = {
    maxWidth: '20rem',

};

const voteStyle = {
    maxWidth: '18rem',
    height: '5px',
    margin: '10px'

};

const image = {
    height: '100px',
    width: '100px',
    border: '1px solid black',}

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

    let noteVoteByType = "";
    switch (note.vote) {
        case NoteVote.Two:
            console.log(note.image.split('\\').pop().split('/').pop())
            noteVoteByType += "";
            break;
        case NoteVote.Three:
            noteVoteByType += "bg-info w-25";
            break;
        case NoteVote.Four:
            noteVoteByType += "bg-secondary w-50";
            break;
        case NoteVote.Five:
            noteVoteByType += "bg-primary w-75";
            break;
        case NoteVote.Six:
            noteVoteByType += "bg-success w-100";
            break;
        default:
            noteVoteByType += "bg-danger";
            break;
    }
    
    if(note.image){
        
const test = note.image.split('\\').pop().split('/').pop();;
console.log(test);  
    }

    return (
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
            <div className="card-footer bg-transparent ">
                {note.image && <img style={image} src = {"../images/"+ (note.image = note.image.split('\\').pop().split('/').pop())}></img>}
            </div>
            <div >
                <div >
                    VOTE: {note.vote} of 6
                         </div>
                <div className={noteVoteByType} style={voteStyle}></div>
                </div>
            
            {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span className='logout-btn btn btn-dark h-3 '><Link to={`/notes/edit/${note.id}`} > Edit </Link></span>}
            {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span className='logout-btn btn btn-dark ml-sm-2 ' style={deleteBtn} onClick={() => onDeleteClick(note.id)}> Delete</span>}
        </div>
    )
}