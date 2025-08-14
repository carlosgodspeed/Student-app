import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../constant/Colors';

export default function SignIn() {

    const router = useRouter();
    
    return (
        <View style={{
            display:'flex',
            alignItems:'center',
            paddingTop:100,
            flex:1,
            padding:25,
            backgroundColor:Colors.WHITE,
        }}>

        <Image source={require('../../assets/images/login.png')}style={{
            width:180,
            height:180,
            }}/>

        <Text style={{
            fontSize:30,
            fontFamily: 'outfit-bold',
        }}>Bem Vindo</Text>

        <TextInput placeholder='Email'
            style={styles.textInput}
            />

        <TextInput placeholder='Senha' 
            style={styles.textInput}
            />

        <TouchableOpacity style={{
            padding:15,
            backgroundColor:Colors.PRIMARY,
            width:'100%',
            marginTop:25,
            borderRadius:10,
        }}>

        <Text style={{
            fontFamily:'outfit',
            fontSize:20,
            color:Colors.WHITE,
            textAlign:'center',
        }}>Login</Text>

        </TouchableOpacity>

        <View style={{
            backgroundColor:Colors.WHITE,
            display:'flex',
            flexDirection:'row',
            gap:5,
            marginTop:20,
        }}>

        <Text style={{
            fontFamily:'outfit',
        }}>Não Possui Conta?</Text>

        <Pressable onPress={()=>router.push('/auth/signUp')}>
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-bold',
            }}>Criar Conta</Text>
        </Pressable>

        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        width:'100%',
        padding:15,
        fontSize:18,
        marginTop:20,
        borderRadius:8,
        fontFamily:'outfit-bold',
        backgroundColor:'#ffffff',
    }
})