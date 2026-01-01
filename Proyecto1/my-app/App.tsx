import React  from 'react';

import Header from './src/components/Header';
import Timer from './src/components/Timer';
import {StatusBar} from "expo-status-bar";
//instalar libreria para sonido (npx expo install expo-av)
import { Audio } from "expo-av";

import {StyleSheet, 
  Platform,
  View, 
  Text, 
  Image, 
  ScrollView, 
  TextInput, 
  SafeAreaView,
  TouchableOpacity, 
  } 
  from 'react-native';
import { useState, useEffect } from "react";


const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]


const App = () => {
  //Variables utiles llamadas, states. (time = variable ` setTime = metodo que asigna valor a time` useState = valor inicial de time).
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState(0);
  const [isActive, setIsActive] = useState(false);


  // ************** Cronometro ****************
  //para acceder ciclos de vida del componente
  //solo accede cuando los variables del arreglo cambian
  useEffect(() => {
    let interval = undefined;

    if (isActive) {//correr el timer
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }
    else
    { //limpiar el interval
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);


  // ************* Boton de activar reloj ****************** 
  function handleStartStop() {
    setIsActive(!isActive);
    playSound();
  }

async function playSound(){ //Agregar sonido a la funcion
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/clic.mp3")
    )
      await sound.playAsync();
    
  }

  return (
    //Contenedor de toda la pagina
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      
      <View style={{ //Pseudo Scaffold/div
        
        flex: 1, //Con 1 contenedor tomara todo el espacio disponible
        paddingHorizontal: 15, 
        paddingTop: Platform.OS === "android" ? 30 : 0}}>
        <Text style={styles.text}>RELOJ</Text>
        <Header currentTime = {currentTime} 
        setCurrentTime = {setCurrentTime} 
        setTime = {setTime} >

        </Header>
        <Timer time = {time}/>
        <TouchableOpacity style = {styles.button} onPress={handleStartStop}>
          <Text style = {{color: 'white', fontWeight: 'bold'}}>{isActive ? "Stop" : "Start"}</Text>
        </TouchableOpacity>
      </View>

      
        

    </SafeAreaView>
    )};

    //Estilo del contenedor principal de la pagina
    const styles = StyleSheet.create({
      container:{
        flex: 1,
      },

      text: {
        
        fontSize: 32,
        fontWeight: "bold",
        padding: 5,
        
      },

      button: {
        alignItems: "center",
        backgroundColor: "#333333",
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
      }

      });

export default App;