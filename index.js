import {AppRegistry} from 'react-native';
import {App} from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {name as appName} from './app.json';

const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const AppWithProviders = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppWithProviders);
