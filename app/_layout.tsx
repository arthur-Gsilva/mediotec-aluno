import { Stack } from "expo-router";
import "../global.css"
import { AuthProvider } from "../contexts/authContext";

export default function rootLayout() {
    return(
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index"/>
            </Stack>
        </AuthProvider>
        
    )
}