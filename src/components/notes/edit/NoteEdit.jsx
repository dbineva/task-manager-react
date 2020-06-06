import React, {useState, useEffect} from 'react';
import { saveNote, getNoteById } from '../../../core/api/notes.api';
import { Redirect } from 'react-router-dom';
import './NoteEdit.css';
import { Header } from '../../layout/header/Header';
import { Footer } from '../../layout/footer/Footer';

export function NoteEdit(props){

    const [currentNote, setCurrentNote] = useState({title: '', content: '', authorId: '', authorName: '', date: '' });
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            getNoteById(props.computedMatch.params.id).then((result) => {
                setCurrentNote(result.data);
            });
    }
}, [props.computedMatch.params.id])

    const onInputChange = (event) => {
        event.persist();
        setCurrentNote((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
    const onNoteSave = (event) => {
        event.preventDefault();
        saveNote(currentNote).then(() => { 
            setShouldRedirect(true);
        })
        .catch((err) => console.error(err));
    }


    return(
        <>
        <Header />
            { shouldRedirect && <Redirect to="/notes" /> }
            <div className="note-edit-wrapper">
                <form action="" className="note-edit-form" onSubmit={onNoteSave}>
                    <div className="form-group">
                        <label htmlFor="title" className="label-style" > Title: </label>
                            <input className="form-control" type="text" id="title" name="title" onChange={onInputChange} value= {currentNote.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content" className="label-style">Content: </label>
                        <textarea className="form-control" id="content" name="content" onChange={onInputChange} value={currentNote.content} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className="label-style">Status: </label>
                        <select className="form-control" id="status" name="status" onChange={onInputChange} value={currentNote.status}>
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Done">Done</option>
                        </select>
                    </div> 
                
                    <button className="btn btn-primary btn-style ">Save note</button>
                    
                
                </form>
                
            </div>
        <Footer />
        </>
    )
}