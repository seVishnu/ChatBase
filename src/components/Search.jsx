import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase'

const Search = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const handleKey = (e) =>{
   e.code === 'Enter'&& handleSearch();
  }
  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName));
   try {
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
       setUser(doc.data());
     });
   }
   catch {
    setError(true);
   }
  }
  const handleSelect = () => {
    
  }
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={(e) => setUserName(e.target.value)}/>
      </div>
     {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL}alt="a person" />
        <div className="userChatInfo">
        <span>{user.displayName}</span>
      </div>
      </div>}
    </div>
  )
}

export default Search