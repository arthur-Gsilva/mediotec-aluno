import { SafeAreaView, Text, StatusBar, View, Image, StyleSheet, ScrollView } from "react-native";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";

export default function screen(){
    return(
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight || 0}}>
            <Header />

            <View className="px-8">
                <LinearGradient
                    colors={["#000000", "#A0A0A0"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 15, height: 90 }}
                    className="px-5 mb-5 relative overflow-hidden  justify-center"
                >
                    <View>
                        <Text className="text-white text-xl">
                            Turma 03MT24 (2° Ano)
                        </Text>
                    </View>

                    <View className="absolute right-3 top-5">
                        <Image source={require("../../../assets/turma-icon.png")}/>
                    </View>

                </LinearGradient>

                <View className="text-black font-bold text-3xl gap-2 border-b border-black pb-5">
                    <Text className="text-2xl font-bold">Representante: <Text className="text-xl font-normal">Fred Nicácio</Text></Text>
                    <Text className="text-2xl font-bold">Curso Tecnólogo: <Text className="text-xl font-normal">Fred Nicácio</Text></Text>
                    <Text className="text-2xl font-bold">Disciplinas: <Text className="text-xl font-normal">Fred Nicácio</Text></Text>
                    <Text className="text-2xl font-bold">Turno: <Text className="text-xl font-normal">Fred Nicácio</Text></Text>
                    <Text className="text-2xl font-bold">Horário: <Text className="text-xl font-normal">Fred Nicácio</Text></Text>
                </View>

                <View>
                    <Text className="my-4">Alunos alocados: 20</Text>

                    <ScrollView className="h-[300px] bg-transparent ">
                        <View className="flex gap-2 bg-transparent pb-8">
                            <View className="bg-white p-5 rounded-xl" style={styles.container}>
                                <Text className="font-xl text-center">Cristiano Ronaldo da Silva</Text>
                            </View>
                            <View className="bg-white p-5 rounded-xl" style={styles.container}>
                                <Text className="font-xl text-center">Cristiano Ronaldo da Silva</Text>
                            </View>
                            <View className="bg-white p-5 rounded-xl" style={styles.container}>
                                <Text className="font-xl text-center">Cristiano Ronaldo da Silva</Text>
                            </View>
                            <View className="bg-white p-5 rounded-xl" style={styles.container}>
                                <Text className="font-xl text-center">Cristiano Ronaldo da Silva</Text>
                            </View>
                            <View className="bg-white p-5 rounded-xl" style={styles.container}>
                                <Text className="font-xl text-center">Cristiano Ronaldo da Silva</Text>
                            </View>
                            <View className="bg-white p-5 rounded-xl" style={styles.container}>
                                <Text className="font-xl text-center">Cristiano Ronaldo da Silva</Text>
                            </View>
                            <View className="bg-white p-5 rounded-xl" style={styles.container}>
                                <Text className="font-xl text-center">Cristiano Ronaldo da Silva</Text>
                            </View>
                        </View>
                        
                    </ScrollView>
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