import React from 'react';
import {AppRegistry} from 'react-native';
import {App} from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {name as appName} from './app.json';
import {store} from './src/redux/store';
import {BACKEND_LINK} from './src/Constants/api';
import {Provider} from 'react-redux';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const client = new ApolloClient({
  uri: BACKEND_LINK,
  cache: new InMemoryCache(),
});

const AppWithProviders = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithProviders);
