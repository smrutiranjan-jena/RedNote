import DispalyNotes from './DispalyNotes';
import NotesForm from './NotesForm';
import React, { useContext, useState } from 'react';
import { NoteContext } from '../../App';
const MyNotesContainer = () => {
    const { state, dispatch } = useContext(NoteContext)
    return (
        <div>
            <h1 className="notePageHeading">Total Notes - {state.notes.length}</h1>
            <div className="boxContainer">
                <NotesForm />
                <DispalyNotes />
            </div>
        </div>
    )
}
export default MyNotesContainer