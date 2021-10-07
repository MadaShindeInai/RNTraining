import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ProfileScreen, TokenScreen} from '../screens/ProfileScreen';
import {useSelector} from 'react-redux';
import {
  selectIsAppLoading,
  // selectUserToken,
} from '../redux/slices/userDataSlice';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Login: 'login',
    Token: 'token/:token?',
    Profile: 'profile',
  },
};

const linking = {
  prefixes: ['awesomeApp://'],
  config,
};

export const AppNavigation = () => {
  // const userToken = useSelector(selectUserToken);
  const isAppLoading = useSelector(selectIsAppLoading);
  if (isAppLoading) {
    // We haven't finished checking for the token yet
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        {/* {userToken === '' ? (
          // No token found, user isn't signed in
          <> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Welcome to RSSTeams mobile APP'}}
        />
        <Stack.Screen
          name="Token"
          component={TokenScreen}
          options={{title: 'Token'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* </>
        ) : (
          // User is signed in
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
