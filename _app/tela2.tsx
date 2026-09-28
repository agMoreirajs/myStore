import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";
 
let contador = 1000;
export default function tela2() {
  const [contador, setContador] = useState(1000);
 
  function handleAdicionar() {
    setContador(contador + 1);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text}>Olá Tela 2</Text>
      <Text style={styles.text2}>{contador}</Text>
 
      <View>
        <Button title="Adicionar" onPress={handleAdicionar} />
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
});
 