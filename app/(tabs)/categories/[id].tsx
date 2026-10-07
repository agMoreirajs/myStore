import { StyleSheet, View, FlatList } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../service/category";
import { getProductsByCategory } from "../../../service/product";
import { ProductItem } from "../../../components/productItem/productItem";

export default function CategoryProductsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const idCategory = parseInt(id as string);
  const category = getCategoryById(idCategory);

  // Redireciona de volta se a categoria não for encontrada
  if (!category) {
    router.back();
    return null;
  }

  // Busca a lista de produtos pertencentes a esta categoria
  const products = getProductsByCategory(idCategory);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});