import React from "react";
import { router } from "expo-router";
 
 
 
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  SafeAreaView,
} from "react-native";
 
export default function Index() {
  function handleEntrar() {
    router.push("/(tabs)/home")
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="cover"
      />
     
 
      <View style={styles.tituloContainer}>
         <Text style={[styles.titulo, styles.destaque]}>JukaBala</Text>
         <Text style={styles.titulo}> Store</Text>
      </View>
      <Text style={styles.texto}>Aqui seu dinheiro rende mais!!</Text>
 
      <Button title="Entrar" onPress={handleEntrar} />
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  tituloContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "900",
  },
  texto: {
    fontSize: 15,
  },
  destaque: {
    color: "#E67a31",
  },
});
 