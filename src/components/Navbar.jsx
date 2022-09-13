import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wu5fi-qK225sMzM1FYPU4z6hjjw36jzn1Q&usqp=CAU' alt='a man' />
        <span>Natalie</span>
        <button>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar