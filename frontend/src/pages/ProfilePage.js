import { useEffect, useState } from 'react'
import profile from '../assets/images/5907.jpg'
import '../index.css'
import axios from 'axios'
const ProfilePage = (props) => {
    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:3003/api/users/account', {
                    headers: {
                        "o-auth": localStorage.getItem('RedNoteToken')
                    }
                })
                setUserInfo(response.data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    console.log(userInfo)
    return (
        <div>
            <h1 className="aboutUsHeading">My Profile</h1>
            <div className="aboutUsContainer">
                <div className="boxContainer">
                    <div className="imagearea red-acc-img" >
                        <img src={profile} />
                    </div>
                    <div className="textarea">
                        <p><span className="aboutUsmagic">Account Details</span>
                            <br />
                            <br />
                            <i className="fa fa-lock"></i>
                            {userInfo._id}
                            <br />
                            <br />
                            <i className="fa fa-user"></i>
                            {userInfo.username}
                            <br />
                            <br />
                            <i className="fa fa-mobile"></i>
                            {userInfo.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage