import { View, Text, StyleSheet } from 'react-native';

const App2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from App 2 !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default App2;