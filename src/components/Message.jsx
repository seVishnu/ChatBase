import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log('Msg:', message);
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