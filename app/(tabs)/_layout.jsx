import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="home"
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color}/>,
                tabBarLabel:'Home',
            }}
            />
            <Tabs.Screen name="explore"/>
            <Tabs.Screen name="progress"/>
            <Tabs.Screen name="profile"/>
        </Tabs>
    )
} 