import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { Header } from "../../../components/Header";
import { ComuniItem } from "../../../components/ComuniItem";

export default function screen(){
    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}}>
            <Header />

            <ScrollView className="h-[610px]">
                <View className="px-10 gap-5 pb-5">
                    <ComuniItem />
                    <ComuniItem />
                    <ComuniItem />
                    <ComuniItem />
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}