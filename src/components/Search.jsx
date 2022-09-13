import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wu5fi-qK225sMzM1FYPU4z6hjjw36jzn1Q&usqp=CAU" alt="a person" />
        <div className="userChatInfo">
        <span>Natalie</span>
      </div>
      </div>
    </div>
  )
}

export default Search