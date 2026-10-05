import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllCategories } from "../../../service/category";
import { CategoryItem } from "../../../components/categoriesItem/categoriesItem";

export default function Categories() {
    const categories = getAllCategories();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryItem category={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});