import { Link } from 'react-router-dom'
import '../index.css'
import { Button, Badge } from 'reactstrap';
import swal from 'sweetalert';
import { useContext } from 'react';
import { NoteContext } from '../App';
const NavBar = (props) => {
    const {state,dispatch}=useContext(NoteContext)
    const token = localStorage.getItem('RedNoteToken')
    const logOut = () => {
        localStorage.removeItem('RedNoteToken')
        swal(" Gooood Bye !", "", "success");
    }
    return (
        <div>
            {token ? (
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <p className="appLogo">RedNote</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Link to="/" className="nav-item">Home</Link>
                            <Link to="/mynotes" className="nav-item">
                                <div>
                                    <Button
                                        color="danger"
                                        outline
                                        className='my-note-button'

                                    >
                                        My Notes{' '}
                                        <Badge>
                                            {state.notes.length}
                                        </Badge>
                                    </Button>
                                </div>
                                {/* My Notes */}
                            </Link>
                            <Link to="/account" className="nav-item">Account</Link>
                            <Link to="/" className="nav-item" onClick={logOut}>Logout</Link>
                        </div>
                    </div>
                </nav>
            ) : (
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <p className="appLogo">RedNote</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Link to="/" className="nav-item">Home</Link>
                            <Link to="/register" className="nav-item">Register</Link>
                            <Link to="/login" className="nav-item">Login</Link>
                        </div>
                    </div>
                </nav>
            )}
        </div>
    )
}
export default NavBar