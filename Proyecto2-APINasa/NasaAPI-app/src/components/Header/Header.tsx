import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native'

const Header = () => {
    return (
    <View style={style.container}>
        <View style={style.leftContainer}>
            <Text style = {style.title}>Explore</Text>
        </View>
        <View style={style.rightContainer}>
            <Image style = {style.image} source={require('../../assets/NASA-Logo-Large.png')} />
        </View>
    </View>
    )

}
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',

    },

    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',

    },

    title: {
        fontSize: 20,
        color: '#fff',
    },

    image: {
        width: 60,
        height: 60,
    }

});

export default Header;