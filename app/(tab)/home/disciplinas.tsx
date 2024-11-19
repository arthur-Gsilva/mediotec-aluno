import { SafeAreaView, Text, StatusBar, View, Image, StyleSheet, ScrollView, Pressable, ImageBackground } from "react-native";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { getDisciplinas } from "../../../services/api";
import { Disciplina } from "../../../types/Disciplina";

export default function screen(){

    const [disciplinas, setDisciplinas] = useState<Disciplina[]>()

    const user = useContext(AuthContext)


    const getData = async () => {
        const data = await getDisciplinas(user.authData?.IdUser as number)
        setDisciplinas(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}}>
            <Header />

            <View className="px-8">
                <LinearGradient
                    colors={["#000000", "#A0A0A0"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 15, height: 90 }}
                    className="px-5 mb-5 relative flex-row overflow-hidden justify-between items-center"
                >
                    <View>
                        <Text className="text-white text-xl">
                            Disciplinas
                        </Text>
                    </View>

                    <View className="">
                        <FontAwesome6 name="graduation-cap" size={70}/>
                    </View>

                </LinearGradient>

                <View>
                    <View className="flex-row gap-4 flex-wrap items-center justify-center">
                        {disciplinas?.map((item) => (
                            <Pressable 
                                className="w-[155px] h-[220px] text-center items-center gap-5 bg-white overflow-hidden rounded-xl pb-16"
                                style={styles.container}
                                key={item.idDisciplina}
                            >
                                <ImageBackground 
                                    source={require("../../../assets/disciplina.png")}
                                    className="h-1/2 w-full"
                                    resizeMode="cover"
                                />
                                <View className="px-2">
                                    <Text className="text-[#3C3C4399] font-bold">{item.nomeDaDisciplina}</Text>
                                    <Text className="text-[#3C3C4399]">Carga Horária: {item.cargaHoraria}</Text>
                                    <Text className="text-[#3C3C4399]">Professor: {item.nomeProfessor}</Text>
                                </View>
                            </Pressable>
                        ))}
                        
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#3B4056',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 3,
    },

    scrollContainer: {
        paddingBottom: 16, // Espaço adicional para o final do conteúdo
    },
});