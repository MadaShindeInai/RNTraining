import React, {useCallback, useEffect, useState} from 'react';
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

const useInitialURL = () => {
  const [url, setUrl] = useState<null | string>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  }, []);

  return {url, processing};
};

export const LoginScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {url: initialUrl, processing} = useInitialURL();
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
        <Text>
          {processing
            ? 'Processing the initial url from a deep link'
            : `The deep link is: ${initialUrl || 'None'}`}
        </Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="link" onPress={handlePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
