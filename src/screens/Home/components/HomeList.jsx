import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../styles';

export const HomeList = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <Text style={Styles.welcomeText}>Welcome to Nxtsh React Native Redux Boilerplate</Text>
      <Text style={Styles.featuresText}>Features included:</Text>
      <Text style={Styles.text}>React Native</Text>
      <Text style={Styles.text}>Redux</Text>
      <Text style={Styles.text}>Redux Sauce</Text>
      <Text style={Styles.text}>Redux Thunk</Text>
      <Text style={Styles.text}>Redux Persist</Text>
      <Text style={Styles.text}>Redux Logger</Text>
      <Text style={Styles.text}>React Navigation</Text>
      <Text style={Styles.text}>Native Base</Text>
      <Text style={Styles.text}>Axios</Text>
      <Text style={Styles.text}>React Native Vector Icons</Text>
      <Text style={Styles.text}>React Native Size Matters</Text>
      <Text style={Styles.text}>ESLint</Text>
      <Text style={Styles.text}>Prettier</Text>
      <Text style={Styles.text}>Editor Config</Text>

      <Button dark onPress={() => navigation.navigate('Todo')} style={Styles.button}>
        <Text style={{ color: 'white' }}>Test My To Do List</Text>
      </Button>
    </SafeAreaView>
  );
};
