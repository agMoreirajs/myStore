import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
 
const apagada = require("../assets/lampada_apagada.jpg");
const acesa = require("../assets/lampada_acesa.jpg");
 
export default function tela3() {
  const [lampada, setLampada] = useState(apagada);
  const [status, setStatus] = useState("acender");
 
  function handleLampada() {
    setStatus(status === "acender" ? "apagar" : "acender");
    setLampada(lampada === apagada ? acesa : apagada);
  }
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: lampada === apagada ? "yellow" : "white" }]}>
      <Image source={lampada} style={styles.logo} />
 
      <View>
        <TouchableOpacity>
          <Text style={styles.text2} onPress={handleLampada}>
            {status}
          </Text>
        </TouchableOpacity>
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
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 20,
  },
});
 
 