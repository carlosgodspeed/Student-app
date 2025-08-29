import { Image, View } from 'react-native'

export default function NoCourse() {
    return (
        <View style={{
            marginTop: 40,
        }}>
            <Image source={require('./../../assets/images/book.png')}
            style={{
                height:200,
                width:200,
            }}
            />
        </View>
    )
}