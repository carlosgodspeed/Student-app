import { Ionicons } from '@expo/vector-icons'
import { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { UserDetailContext } from '../../context/UserDetailContext'
export default function Header() {
    const {userDetail,setUserDetail} = useContext(UserDetailContext)
    return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }}>
        <View>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:25,
            }}>Olá {userDetail.name}</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:17,
            }}>Vamos começar!</Text>
        </View>
        <TouchableOpacity>
            <Ionicons name="settings-outline" size={40} color="black" />
        </TouchableOpacity>
    </View>
    )
}