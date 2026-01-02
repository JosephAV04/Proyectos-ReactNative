import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


const staticInfo = {
    name: 'Jose Barreiro',
    url: require('../../assets/FotoPerfil.jpg')
}

const Header = () => {
    const {canGoBack, goBack} = useNavigation();

    return (        
        <View style={styles.container}> 
            {canGoBack() ? (                // boton de volver para atras 
                <View style = {styles.arrowContainer}> 
                    <Button icon= {<Icon name="arrow-back" 
                    size={24} />} 
                    type = "clear"
                    onPress={() => goBack()}/>
                    </View>
            ): undefined }
            <View>
                <Text style={styles.greetigns}>{`Hello ${staticInfo.name}`}</Text>
                <Text style={styles.textWelcome}>Welcome back to your goal</Text>
            </View>
            <Image source={staticInfo.url} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    greetigns: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    textWelcome: {
        color: 'gray',
        fontSize: 18,
    },

    image: {
        width: 40, 
        height: 40, 
        borderRadius: 90,

    },
    arrowContainer: {
        marginLeft: -12,
    }
});

export default Header;
