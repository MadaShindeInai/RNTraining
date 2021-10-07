import React, {useCallback} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Linking,
  Alert,
  Button,
  Text,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {AUTH_BACKEND_LINK} from '../../Constants/api';
// import Reactotron from 'reactotron-react-native';

export const LoginScreen = ({route}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  // Reactotron.log!(route);
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(AUTH_BACKEND_LINK);

    if (supported) {
      await Linking.openURL(AUTH_BACKEND_LINK);
    } else {
      Alert.alert(`Don't know how to open this URL: ${AUTH_BACKEND_LINK}`);
    }
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>
            Stringified params: {JSON.stringify(route.params) || 'undefined'}
          </Text>
          <Button title="link" onPress={handlePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
