import React from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';
import NoteList from './NoteList';


class NoteApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getInitialData(),
            search: ""
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onDeleteEventHandler(id){
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({notes});
    }

    onArchiveEventHandler(id){
        const archiveNote = this.state.notes.map((note) => (note.id === id ? {...note, archived: !note.archived} : note));
        this.setState({notes: archiveNote});
        console.log(archiveNote);
    }

    onAddNoteHandler({title, body}){
        const createdDate = new Date().toISOString();
        this.setState((prevNote) => {
            return{
                notes: [
                    ...prevNote.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: createdDate,
                        archived: false
                    }
                ]
            }
        });
    }

    onSearchEventHandler(event){
        this.setState(() => {
            return{
                search: event.target.value
            }
        })
    }

    render(){
        const search = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
        
        const archiveNotes = search.filter((note) => {
            return note.archived === false;
        });

        const archivedNotes = search.filter((note) => {
            return note.archived === true;
        });

        return(
            <>
                <div className="note-app__header">
                    <h1>Notes App </h1>
                    <NoteSearch onSearch={this.onSearchEventHandler} />
                </div>

                <div className="note-app__body">
                    <NoteInput addNote = {this.onAddNoteHandler} />
                    <h2>Catatan Aktif : </h2>
                    <NoteList 
                    notes = {archiveNotes}
                    onDelete = {this.onDeleteEventHandler}
                    onArchive = {this.onArchiveEventHandler}
                     />
                     <h2>Arsip Catatan</h2>
                     <NoteList 
                     notes = {archivedNotes}
                     onDelete = {this.onDeleteEventHandler}
                     onArchive = {this.onArchiveEventHandler}
                      />
                </div>

            </>
        );
    }

}


export default NoteApp;