import { Pressable, Text, StyleSheet } from "react-native"

export const ComuniItem = () => {
    return(
        <Pressable 
            style={styles.container}
            className="bg-white rounded-xl pl-6 py-3"
        >
            <Text className="color-[#292F47] mb-2">12 de Março</Text>
            <Text className="bg-red-500 w-[100px] text-center rounded-md color-white">Informativo</Text>
            <Text className="font-bold my-2 text-xl">Problema na estante</Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis excepturi atque ipsa natus recusandae illum eos, soluta aliquam suscipit, quasi sint quia molestiae maxime non. Sunt nobis labore quae.
            </Text>
            <Text className="mt-3 underline pb-1 font-bold">Ver mais</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#3B4056',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 10,
    },
});