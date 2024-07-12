import { useState, useEffect, useContext, createContext } from "react";
import { Usuario } from "../interface/Usuario";
import { AuthProviderProps } from "../interface/AuthProviderProps";

interface AuthContextType {
    user: Usuario | null;
    login: (userdata: Usuario) => void;
    logout: () => void;
  }
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }

export const AuthProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] = useState(() => {
        const savedUserData = localStorage.getItem('login_teste');
        return savedUserData ? JSON.parse(savedUserData) : null;
    });

    const login = (userdata: Usuario) => {
        setUser(userdata)
        localStorage.setItem('login_teste', JSON.stringify(userdata))
    } 
    const logout = () => {
        setUser(null)
        localStorage.removeItem('login_teste')
    }
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          logout();
        }, 100000);
    
        return () => clearTimeout(timeoutId);
      }, []);

    

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
