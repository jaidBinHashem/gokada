import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import PageOneScreen from './app/screens/PageOneScreen';
import PageTwoScreen from './app/screens/PageTwoScreen';
import DataScreen from './app/screens/DataScreen';

import store from './store';
import {SafeAreaView} from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Page 1" component={PageOneScreen} />
            <Drawer.Screen name="Page 2" component={PageTwoScreen} />
            <Drawer.Screen name="Data Page" component={DataScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
