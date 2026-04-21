import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';

import Title from './src/components/Title';
import GameList from './src/components/GameList';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f6fb' }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}>
        <Title />
        <GameList />
      </View>
    </SafeAreaView>
  );
}
