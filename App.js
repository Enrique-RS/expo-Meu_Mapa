import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.containerMap}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <MapView style={styles.map}/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
const styles = StyleSheet.create({
  containerMap: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  });