import { StatusBar } from 'expo-status-bar';
import React, { memo, useState } from 'react';
import { Navigation } from "react-native-navigation";
import { StyleSheet, Text, View, Alert, Button, Image } from 'react-native';

const HomeScreen = memo(() => {
  const [title, setTitle] = useState('Press Me')
  const _onPressButton = () => {
    Alert.alert('You tapped the button!')
    setTitle('Press Me Update');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={styles.buttonContainer}>
        <Button
          onPress={_onPressButton}
          title={title}
          color='#841584'
        />
      </View>
      <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} style={{ width: 400, height: 400 }} />
    </View>
  );
});

Navigation.registerComponent('Home', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'red'
  },
  btnColor: {
    color: '#841584',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


export default HomeScreen;
