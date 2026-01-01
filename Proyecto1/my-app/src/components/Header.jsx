import { View, Text, TouchableOpacity, StyleSheet} from "react-native"

const options = ["Descanso", "Short Break", "Long Break"];

export default function Header({setTime, currentTime, setCurrentTime}) {
    
    function handlePress(index){
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60);
    }
    
    return (
    <View style={{flexDirection: 'row', flexWrap: "wrap"}}>
        
        {options.map((item, index) => ( //Itera sobre options generando un boton por indice.
            <TouchableOpacity key={index} onPress = {() => handlePress(index)}
            style = {[styles.itemStyle, 
            currentTime !== index && {borderColor: 'transparent'}, //estilo para los bordes no seleccionados
            ]}>
                <Text style={{ fontWeight: "bold" }}>{item}</Text>
            </TouchableOpacity>
        ))}
        
    </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        
        width: "33%",
        alignItems: "center",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor: "white",
        marginVertical: 20,
        
    }
})

