import { createContext, ReactNode, useState } from "react";
import { Login } from "../services/Auth";

export type AuthData = {
    token: string,
    TipoUser: string,
    NomeUsuario: string,
    IdUser: string
}

type contextType = {
    authData?: AuthData,
    signIn: (email: string, password: string) => Promise<AuthData | undefined>,
    signOut: () => Promise<void>
}

export const AuthContext = createContext<contextType>({} as contextType)

export const AuthProvider = ({ children }: {children: ReactNode}) => {

    const [authData, setAuth] = useState<AuthData>()

    const signIn = async (email: string, password: string): Promise<AuthData | undefined> => {
        const auth = await Login(email, password)

        setAuth(auth)

        return auth
    }

    const signOut = async () => {
        setAuth(undefined)

        return
    }

    return(
        <AuthContext.Provider value={{ authData, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}