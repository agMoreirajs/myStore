import { StyleSheet, Image, Text, ScrollView, View } from "react-native";
import { Button } from "../../components/button/button";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getProductById } from "../../service/product";
export default function ProducScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  0;
  const idproduct = parseInt(id as string);
  const product = getProductById(idproduct);
  if (!product) {
    router.back();
    return null;
  }
 
  function handleAddToCart() {
    if (product) {
      alert(
        `você comprou o produto ${product.title} e gastara mais ${product.price}`,
      );
    }
  }
 
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.productArea}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Image
          style={styles.Image}
          source={{ uri: product.image }}
          resizeMode="cover"
        />
 
        <View style={styles.detailsArea}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}> {product.description} </Text>
        </View>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      </ScrollView>
 
      <View style={styles.buttonArea}>
        <Button title="Comprar" onPress={handleAddToCart} />
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4dede",
  },
  productArea: {
    flex: 1,
    width: "100%",
  },
  Image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  detailsArea: {
    width: "90%",
    paddingHorizontal: 8,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 12,
  },
  buttonArea: {
    padding: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
 
 