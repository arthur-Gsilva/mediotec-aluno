import { Link } from "expo-router";
import { SafeAreaView, Text, StatusBar } from "react-native";

export default function screen() {
    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}} className="">
            <Text>profila e profila</Text>
        </SafeAreaView>
    )
}