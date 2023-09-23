import { useState, useContext, useEffect } from "react"
import { NoteContext } from "../../App"
const SearchFilter = (props) => {
    const { getFilteredNotes } = props
    const { state, dispatch } = useContext(NoteContext)
    const [search, setSearch] = useState('')
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }
    const searchfilteredNotes = state.notes.filter((note) => {
        return note.title.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <div>
            <input type="search" value={search} onChange={handleSearchChange} placeholder="enter title"/>
            <button onClick={() => {
                getFilteredNotes(searchfilteredNotes)
            }}>search</button>
        </div>
    )
}
export default SearchFilter