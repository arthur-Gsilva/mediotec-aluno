import { Link } from "expo-router";
import { SafeAreaView, Text, StatusBar } from "react-native";

export default function screen() {
    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}} className="">
            <Text className="text-red-500">This is only test</Text>
        </SafeAreaView>
    )
}