import React from 'react';
import ActionButton from './ActionButton';
import NoteItemBody from './NoteItemBody';

function NoteItem({id, title, body, createdAt, archived, onDelete , onArchive}){
    return(
        <div className="note-item">
            <NoteItemBody title = {title} body = {body} createdAt = {createdAt} />
            <ActionButton id={id} onDelete = {onDelete} onArchive = {onArchive} archived ={archived} />
        </div>
    );
}

export default NoteItem;