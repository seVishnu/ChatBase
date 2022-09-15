import { signOut } from "firebase/auth"
import { auth } from "../firebase"

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wu5fi-qK225sMzM1FYPU4z6hjjw36jzn1Q&usqp=CAU' alt='a man' />
        <span>Natalie</span>
        <button onClick={()=>signOut(auth)}>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar