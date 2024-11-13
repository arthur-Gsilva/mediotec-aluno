import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import "../../global.css"
import { Header } from "react-native/Libraries/NewAppScreen";
import { TbSchool } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";

export default function tabsLayout() {
    return(
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#000' }}>
            <Tabs.Screen 
                name="home"
                options={{ tabBarIcon: ({ color }) => <FontAwesome size={24} name="graduation-cap" color={color}/>}}
            />
            <Tabs.Screen 
                name="profile"
                options={{ tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color}/> }}
            />
        </Tabs>
    )
}