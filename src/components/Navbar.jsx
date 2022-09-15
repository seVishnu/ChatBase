import { signOut } from "firebase/auth"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { auth } from "../firebase"

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt='a man' />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar