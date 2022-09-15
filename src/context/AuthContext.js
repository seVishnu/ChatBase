import { onAuthStateChanged } from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=> {
        const unSub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user)
        })
        return () =>{
            unSub(); //cleanup
        }
    }, []);
    return(
        <AuthContext.Provider value={{currentUser}}>
        {children}
        </AuthContext.Provider>
    )
       

}