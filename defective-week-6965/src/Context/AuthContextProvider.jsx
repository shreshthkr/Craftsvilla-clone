import {createContext, useState} from "react";

export const AuthContext = createContext();

export default function AuthContextPovider({children}) {
    const [isAuth, setIsAuth] = useState(false);


    const LoginHandle = () => {
        setIsAuth(true);
    }


    const LogoutHnadle = () => {
        setIsAuth(false)
    }
    
    return (
        <AuthContext.Provider value={{isAuth, LoginHandle, LogoutHnadle}}>
            {children}
        </AuthContext.Provider>
    )
   
}