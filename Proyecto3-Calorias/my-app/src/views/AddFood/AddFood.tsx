import React, { useState } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Header from '../../components/Header'
import { Button, Icon, Input } from '@rneui/themed'
//import {  } from '@rneui/base'
import AddFoodModal from '../../components/AddFoodModal'

const AddFood = () => {

    const [visible, setIsVisible] = useState<boolean>(false);

    const handleModalClose = () => {
        setIsVisible(false);
    }

    return(
    
    <View style = {styles.container}>
        <Header />
        <View style = {styles.addFoodContainer}>
            <View style = {styles.legendContainer}>
                <Text style = {styles.addFoodLegends}>AddFood</Text>
            </View>
            <View style = {styles.addFoodBtnContainer}>
                <Button icon={<Icon 
                    color = '#fff' 
                    name="add-circle-outline" 
                    type="clear" 
                    />}  
                    radius = "lg"                    
                    color = "#4ecb71"
                    onPress = {() => setIsVisible(true)}
                />
            </View>
        </View>
        
        <View style = {styles.searchContainer}>
            <View style = {styles.inputContainer}>
                <Input placeholder = 'apples, pie, soda...'/>
            </View>
            <Button title = 'Search' 
                color = '#ade8af' 
                titleStyle={styles.searchBtnTitle}
                radius = "lg" 
                onPress = {() => setIsVisible(true)}
            />                
        </View>

        <AddFoodModal visible = {visible} onClose = {handleModalClose}/>
    </View>
    )
}
const styles = StyleSheet.create({
        container: {
            padding: 12,

        },
        legendContainer: {
            flex: 1,
            

        },
        addFoodBtnContainer: {
            flex: 1,
            alignItems: 'flex-end'
        },

        addFoodContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 24,

        },
        addFoodLegends:{
            fontSize: 20,
            fontWeight: 'bold',

        },
        searchContainer: {
            flexDirection: 'row',
        },
        inputContainer: {
            flex: 1,
            marginLeft: -12,
        },
        searchBtnTitle: {
            color: '#000',
            fontSize: 14,
        }
    }
)
export default AddFood