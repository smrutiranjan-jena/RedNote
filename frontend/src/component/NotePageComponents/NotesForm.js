import '../../index.css'
import React, { useState } from 'react';
import { NoteContext } from "../../App";
import { useContext } from 'react';
const NotesForm = () => {
    const { state, dispatch } = useContext(NoteContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleContentChange = (e) => {
        setContent(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const noteData = {
            id:Number(new Date()),
            title: title,
            content: content
        }
        dispatch({ type: "ADD_NOTE", payload:noteData })
        const reset = () => {
            setTitle('')
            setContent('')
        }
        reset()
    }
    return (
        <div>
            <div className="FormContainer">
                <i className="fa fa-pencil"></i>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Title' value={title} onChange={handleTitleChange} /><br />
                    <textarea cols="21" rows="4" placeholder='Content' value={content} onChange={handleContentChange} />
                    <input type="submit" className='btn' value="Add Note" /><br />
                </form>
            </div>
        </div>
    )
}
export default NotesForm