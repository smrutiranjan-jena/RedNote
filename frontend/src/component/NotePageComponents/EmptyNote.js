import '../../index.css'
const EmptyNote = (props) => {
    return (
        <div>
            <p className="emp-note-para">Your Note Is Empty!</p>
            <p style={{color:"red"}}>Add Your First Note ...</p>
           
        </div>
    )
}
export default EmptyNote