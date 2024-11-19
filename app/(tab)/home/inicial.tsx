import { SafeAreaView, Text, StatusBar, View } from "react-native";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { GridItem } from "../../../components/GridItem";
import { router } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";

export default function screen() {

    let homeList = [
        {icon: 'graduation-cap', title: 'Disciplinas', onPress: () => router.push('/home/disciplinas')},
        {icon: 'id-card-clip', title: 'Turma', onPress: () => router.push('/home/turma')},
        {icon: 'calendar-days', title: 'Calendário', onPress: () => router.push('/calendario')},
        {icon: 'bullhorn', title: 'Comunicados', onPress: () => router.push('/home/comunicados')},
    ]

    const user = useContext(AuthContext)

    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}}>
            <Header />
            
            <View className=" w-full px-8">
                <View className="gap-5">
                    <LinearGradient
                        colors={["#000000", "#A0A0A0"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: 15, height: 100 }}
                        className="px-5 py-2 relative overflow-hidden"
                    >
                        <View>
                            <Text className="text-white text-xl">{user.authData?.NomeUsuario}</Text>
                            <Text className="text-[#EBEBF599]">19 anos</Text>
                        </View>

                        <View className="absolute -right-3 -bottom-2">
                            <FontAwesome6 name="user-large" color={'#E8E8E8'} size={70}/>
                        </View>

                    </LinearGradient>

                    <View className="bg-gray-400 h-4 rounded-full w-full"></View>


                    {/* <FlatList 
                        data={homeList}
                        renderItem={({ item }) => (<GridItem key={item.title} icon={item.icon} title={item.title}/>)}
                        numColumns={2}
                        className="w-full"
                        ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                    /> */}

                    <View className="flex-row gap-4 flex-wrap items-center justify-center">
                        {homeList.map((item) => (
                            <GridItem key={item.title} icon={item.icon} title={item.title} onPress={item.onPress}/>
                        ))}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}