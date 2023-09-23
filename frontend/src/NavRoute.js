import { Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from './pages/ProfilePage';
import MyNotesPage from './pages/MyNotesPage';
const NavRoute = (props) => {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/mynotes" component={MyNotesPage} />
            <Route exact path="/account" component={ProfilePage} />
        </div>
    )
}
export default NavRoute