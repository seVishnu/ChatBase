import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wu5fi-qK225sMzM1FYPU4z6hjjw36jzn1Q&usqp=CAU" alt="a lady" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wu5fi-qK225sMzM1FYPU4z6hjjw36jzn1Q&usqp=CAU" alt="a lady" />
      </div>
    </div>
  )
}

export default Message