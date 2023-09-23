import 'bootstrap/dist/css/bootstrap.min.css';
import NavRoute from './NavRoute';
import { createContext } from 'react'
import { useReducer } from 'react';
import { initialState, notesReducer } from './reducer'
export const NoteContext = createContext()
const App = (props) => {
  const [state, dispatch] = useReducer(notesReducer, initialState)
  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      <NavRoute />
    </NoteContext.Provider>
  )
}
export default App
