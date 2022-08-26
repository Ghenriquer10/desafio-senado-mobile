import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Header from './src/components/Header';
import RoutesApp from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#005B9E' barStyle='light-content' translucent={false}/>
      <Header/>
      <RoutesApp/>
    </NavigationContainer>
  );
}

