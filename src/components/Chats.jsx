import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
useEffect(()=>{
  const getChats = () =>{
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
     setChats(doc.data());
  });
  return () =>{
    unsub();
  }
  }
  currentUser.uid && getChats()
}, [currentUser.uid])
  console.log(Object.entries(chats)); //convert obj to arrays
  const handleSelect = (user) =>{
    dispatch({type: 'CHANGE_USER', payload: user})
  }
  return (
    <div className="chats">
      {
        Object.entries(chats)?.map((chat, idx) =>(
          <div key={idx} className="userChat" onClick={()=>handleSelect(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} alt="a person" />
          <div className="userChatInfo">
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo.lastMessage?.text}</p>
        </div>
        </div>
        ))
      }
    </div>
  )
}

export default Chats