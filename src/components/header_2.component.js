import React from 'react'
import {View, Text, Dimensions, StyleSheet, ImageBackground} from 'react-native'

const {width, height} = Dimensions.get('window')

export const Header = (props) => {
    return (
        <View style={{marginTop: -13}}>
            <ImageBackground source={require('../assets/4.png')} style={{width: width, height: height/5, marginBottom: -15}} resizeMode="contain">
                <View style={styles.container}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height/10,
        marginLeft: 35,
        marginTop: 60
    },
    title : {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold'
    }
})