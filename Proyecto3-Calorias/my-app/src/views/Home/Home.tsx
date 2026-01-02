import React from 'react';
import {SafeAreaView, View, Text,StyleSheet } from 'react-native';

import Header from '../../components/Header/Header';
import { Button, Icon  } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParams} from '../../types';

const Home = () => {
    const {navigate} = useNavigation<NativeStackNavigationProp<RootStackParams, 'Home'>>();

    const handleAddCaloriesPress = () => {

        navigate('AddFood');

    }
    return (
        <View style = {styles.container}>
            
            <Header />

            <View style = {styles.caloriesContainer}>
                <View style = {styles.leftContainer}>
                    <Text style={styles.caloriesLegend}>Calories</Text>
                </View>
                <View style= {styles.rightContainer}>
                    <Button icon={<Icon 
                    color = '#fff' 
                    name="add-circle-outline" />}  
                    radius = "lg" 
                    color = "#4ecb71"
                    onPress = {
                        handleAddCaloriesPress 
                    } />
                </View>
            </View>



            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 12,

    },
    caloriesLegend:{
        fontSize: 20,
    },

    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    leftContainer: {
        flex: 1,

    },
    caloriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,

    },


});

export default Home;