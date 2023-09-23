import '../index.css'
import NavBar from '../component/NavBar';
import Footer from '../component/Footer'
import MyNotesContainer from '../component/NotePageComponents/MyNotesContainer';
const MyNotesPage = (props) => {
    return (
        <div>
            <NavBar />
            <MyNotesContainer />
            <Footer />
        </div>
    )
}
export default MyNotesPage