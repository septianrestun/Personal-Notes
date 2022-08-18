import React from 'react';
import NoteItem from './NoteItem';

class NoteList extends React.Component{
    render(){
        return this.props.notes.length > 0 ? (
            <div className="notes-list">
                {this.props.notes.map((note) => (
                    <NoteItem 
                    key={note.id} 
                    id ={note.id} 
                    onDelete = {this.props.onDelete}
                    onArchive = {this.props.onArchive}
                    {...note}
                    />
                ))}
            </div>
        ) : (
            <div className="note-list__empty-message">Tidak Ada Catatan Saat Ini</div>
        )
    }
}


export default NoteList;