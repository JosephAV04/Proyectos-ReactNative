import React from 'react';
import Routes from './src/routes';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Routes />
    </SafeAreaView>
  );


}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(7,26,93,255)'
    },
  })

export default App;
