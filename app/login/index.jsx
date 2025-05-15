import { Text, Image, View, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginScreen() {
    return (
        <View>
            <View styles={{
                display:'flex',
                alignItems:'center',
                marginTop:40
            }}>
                <Image source={require('./../../assets/images/login.png')}
                    style={styles.image}
                />
            </View>

            <View>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:210,
        height:450,
        borderRadius:23
    }
})