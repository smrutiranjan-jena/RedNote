import '../index.css'
import note from '../assets/images/3968691.jpg'
import { Button } from 'reactstrap'
import NavBar from "../component/NavBar"
import Footer from '../component/Footer';
import swal from 'sweetalert';
const HomePage = (props) => {
  const token = localStorage.getItem('RedNoteToken')
  const noteAction = () => {
    if (token) {
      props.history.push('/mynotes')
    } else {
      swal(" Hey create an account !", "", "warning");
      props.history.push('/register')
    }
  }
  return (
    <div>
      <NavBar {...props} />
      <div className="aboutUsContainer">
        <div className="boxContainer">
          <div className="imagearea">
            <img src={note} />
          </div>
          <div className="textarea">
            <p> <span className="aboutUsmagic">Welcome to RedNote </span>
              The note-taking app designed to simplify your life and elevate your productivity. Whether you're
              a student, professional, or creative thinker, our app offers the perfect platform to capture your
              ideas, keep your thoughts organized, and unleash your potential.
              <br />
              <br />
              <span className="aboutUsmagic">Effortless Note-Taking : </span> BTaking notes has never been easier.
              With RedNote, you can jot down thoughts, ideas, and important information effortlessly.
              Our intuitive interface allows you to focus on your content without distractions. Say goodbye to
              paper clutter and hello to digital simplicity.
              professional at your doorstep.
              <br />
              <br />
              <span className="aboutUsmagic">Get Started Today : </span> Ready to experience the power of
              RedNote ? It's time to unlock your potential and revolutionize your note-taking journey.
              Click the "Create Note" button below and embark on a note-taking adventure like never before.
              Welcome to a world of organized creativity.
              <br />
              <br />
              <Button
                color="primary"
                outline
                onClick={noteAction}
              >
                Create Note
              </Button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default HomePage