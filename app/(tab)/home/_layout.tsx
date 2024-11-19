import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#EFF1F5" } }}>
            <Stack.Screen name="inicial" />
            <Stack.Screen name="disciplinas" />
        </Stack>
    )
}