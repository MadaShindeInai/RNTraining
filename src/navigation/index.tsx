import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {useSelector} from 'react-redux';
import {
  selectIsAppLoading,
  selectUserToken,
} from '../redux/slices/userDataSlice';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const userToken = useSelector(selectUserToken);
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
    <NavigationContainer>
      <Stack.Navigator>
        {userToken === '' ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Welcome to RSSTeams mobile APP'}}
          />
        ) : (
          // User is signed in
          <Stack.Screen name="Profile" component={ProfileScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
