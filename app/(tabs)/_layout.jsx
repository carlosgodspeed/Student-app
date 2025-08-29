import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout(){
    return (
        <Tabs screenOptions={{
            headerShown:false,
        }}>
            <Tabs.Screen name="home"
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color}/>,
                tabBarLabel:'Home',
            }}
            />
            <Tabs.Screen name="explore"
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color}/>,
                tabBarLabel:'Pesquisar',
            }}
            />
            <Tabs.Screen name="progress"
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="library" size={size} color={color}/>,
                tabBarLabel:'Progresso',
            }}
            />
            <Tabs.Screen name="profile"
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color}/>,
                tabBarLabel:'Perfil',
            }}
            />
        </Tabs>
    )
} 