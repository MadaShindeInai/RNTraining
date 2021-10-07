import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Button,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {Section} from '../../components/Section';
import {
  decrement,
  increment,
  selectCount,
} from '../../redux/slices/counterSlice';

export const ProfileScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Redux">
            Counter value: <Text style={styles.highlight}>{count}</Text>
            <Button
              title="increment"
              color="#000876"
              onPress={() => dispatch(increment())}
            />
            <Button
              title="decrement"
              color="#098200"
              onPress={() => dispatch(decrement())}
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export const TokenScreen = ({navigation, route}: any) => {
  // const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>This is {route?.params?.token}'s profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
