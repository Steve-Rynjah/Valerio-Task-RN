import React from 'react'
import {View, Text, Dimensions, StyleSheet, ImageBackground} from 'react-native'

const {width, height} = Dimensions.get('window')

export const Header = (props) => {
    return (
        <View style={{marginTop: -13}}>
            <ImageBackground source={require('../assets/3.png')} style={{width: width, height: height/5, marginBottom: -15}} resizeMode="contain">
                <View style={styles.container}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.subTitle}>
                    {props.subTitle}
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
        marginTop: 45
    },
    title : {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold'
    },
    subTitle : {
        fontSize: 15,
        color: '#FFF',
        opacity: 0.5,
        marginTop: -3
    }
})