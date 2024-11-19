import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login } from "../services/Auth";

export type AuthData = {
    token: string,
    TipoUser: string,
    NomeUsuario: string,
    IdUser: number
}

type contextType = {
    authData?: AuthData,
    signIn: (email: string, password: string) => Promise<AuthData | undefined>,
    signOut: () => Promise<void>
}

export const AuthContext = createContext<contextType>({} as contextType)

export const AuthProvider = ({ children }: {children: ReactNode}) => {

    const [authData, setAuth] = useState<AuthData>()

    const loadStorage = async () => {
        const auth = await AsyncStorage.getItem('@AuthData')
        if(auth){
            setAuth(JSON.parse(auth))
        }
    }

    useEffect(() => {
        loadStorage()
    }, [])

    const signIn = async (email: string, password: string): Promise<AuthData | undefined> => {
        const auth = await Login(email, password)
        setAuth(auth)
        AsyncStorage.setItem('@AuthData', JSON.stringify(auth))

        return auth
    }

    const signOut = async () => {
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData')
        return
    }

    return(
        <AuthContext.Provider value={{ authData, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}