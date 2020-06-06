import React, { useState, useEffect } from 'react';
import { NoteCard } from '../note-card/NoteCard';
import { getMyNotes } from '../../../core/api/notes.api';
import { Header } from '../../layout/header/Header';
import { Footer } from '../../layout/footer/Footer';


export function MyNotes(props){

    const[userNotes, setUserNotes] = useState([]);
    const listStyle ={
        display: 'flex',
        flexWrap: 'wrap'

    };

    useEffect(() => {

            const searchParam = props.location.search.split('=')[1];
            getMyNotes(searchParam).then((notes) => {
                setUserNotes(notes);
            });
        }, [props.location.search]);


     return(
        <>
            <Header />
                <div className="my-notes-wrapper m-3" style={listStyle}>
                    {userNotes.map(note => <NoteCard note={note} key ={note.id}/> )}
                </div>
            <Footer />
        </>
     )
}