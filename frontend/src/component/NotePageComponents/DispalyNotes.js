import '../../index.css'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import Swal from 'sweetalert2';
import React, { useContext, useState } from 'react';
import { NoteContext } from '../../App';
import SearchFilter from './SearchFilter';
import EmptyNote from './EmptyNote';
const DispalyNotes = () => {
    const { state, dispatch } = useContext(NoteContext)
    const [filteredNotes, setFilteredNotes] = useState([])
    const removeNote = (noteId) => {
        dispatch({ type: "REMOVE_NOTE", payload: noteId })
    }
    const editNote = async (noteId) => {
        const { value: title } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Title',
            inputPlaceholder: 'Type your note title here...',
            inputAttributes: {
                'aria-label': 'Type your note title here'
            },
            showCancelButton: true
        })
        const { value: content } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Content',
            inputPlaceholder: 'Type your note content here...',
            inputAttributes: {
                'aria-label': 'Type your note content here'
            },
            showCancelButton: true
        })
        if (title, content) {
            Swal.fire('Good')
            console.log(title, content)
            const editData = {
                title: title,
                content: content
            }
            dispatch({ type: "EDIT_NOTE", payload: { id: noteId, body: editData } })
        }
    }
    const getFilteredNotes = (data) => {
        setFilteredNotes(data)
    }
    console.log(filteredNotes)
    console.log(filteredNotes)
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    }
    return (
        <div>
            {/* <SearchFilter getFilteredNotes={getFilteredNotes} /> */}
            {state.notes.length === 0 ? (
                <EmptyNote />
            ) : (
                <div>
                    {state.notes.map((note) => {
                        return <Accordion flush open={open} toggle={toggle} className='display-notes-container' >
                            <AccordionItem className='acc-item' >
                                <AccordionHeader targetId={note.id} className='acc-header'>
                                    {note.title}
                                    <span className='acc-icon'>
                                        <i className="fa fa-edit" onClick={() => {
                                            editNote(note.id)
                                        }}></i>
                                        <i className="fa fa-remove" onClick={() => {
                                            removeNote(note.id)
                                        }}></i>
                                    </span>
                                </AccordionHeader>
                                <AccordionBody accordionId={note.id} >
                                    {note.content}
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    })}
                </div>
            )
            }
        </div >
    )
}
export default DispalyNotes