import { StyleSheet, Text, View } from 'react-native';
 
export default function Config() {
  return (
    <View style={styles.container}>
      <Text>MY STORE</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});