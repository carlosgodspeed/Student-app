import { Image, Text, View } from 'react-native';
import Button from '../Shared/Button';
import { useRouter } from 'expo-router';
export default function NoCourse() {

    const router = useRouter();

    return (
        <View style={{
            marginTop: 40,
            display:'flex',
            alignItems:'center',
        }}>
            <Image source={require('./../../assets/images/book.png')}
            style={{
                height:200,
                width:200,
                }}
            />
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:20,
                textAlign:'center',
            }}>Você não tem nenhum curso</Text>

            <Button text={'+ Criar Novo Curso'} onPress={()=>router.push('/addCourse')}/>
            <Button text={'Explore Cursos Existentes'}
                type='outline'
            />
        </View> 
    )
}