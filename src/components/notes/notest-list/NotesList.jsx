import React from 'react';
import { useState, useEffect } from 'react';
import { getAllNotes, deleteNote} from './../../../core/api/notes.api'
import { NoteCard } from '../note-card/NoteCard';
import { Header } from '../../layout/header/Header';
import { Footer } from '../../layout/footer/Footer';

export function NotesList(props){

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const searchParam = props.location.search.split('=')[1];
        getAllNotes(searchParam ).then((result) => {
            setNotes(result);
        });
    }, [props.location.search ])

    const onDelete = (id) => {
        deleteNote(id).then(() => {
            setNotes((prevState) => {
                return prevState.filter(note => note.id !== id);
            })
        })
    };
    return(
        <>
        <Header />
        <div className="list-wrapper d-flex m-3" style={{flexWrap:'wrap'}}>
            {notes.map(note => <NoteCard note={note} key={note.id} onDeleteClick={onDelete}/>)}
        </div>
        <Footer />
    </>
    );
}