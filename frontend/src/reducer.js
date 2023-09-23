const initialState = {
    notes: JSON.parse(localStorage.getItem('notes')) || []
}
const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTE": {
            localStorage.setItem('notes', JSON.stringify([...state.notes, action.payload]))//([...state,action.payload])
            return { ...state, notes: [action.payload, ...state.notes] }//([...state.notes,action.payload])
        } case "REMOVE_NOTE": {
            const filteredNotes = state.notes.filter((note) => {
                return note.id !== action.payload
            })
            localStorage.setItem('notes', JSON.stringify(filteredNotes))
            return { ...state, notes: filteredNotes }
        } case "EDIT_NOTE": {
            const transformedNotes = state.notes.map((note) => {
                if (note.id === action.payload.id) {
                    return { ...note, title: action.payload.body.title, content: action.payload.body.content }
                } else {
                    return { ...note }
                }
            })
            localStorage.setItem('notes', JSON.stringify(transformedNotes))
            return { ...state, notes: transformedNotes }
        }default: {
            return { ...state }
        }
    }
}
export { notesReducer, initialState }