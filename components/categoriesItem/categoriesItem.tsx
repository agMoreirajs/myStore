import { Pressable, Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { styles } from "./categoriesItemStyle";
import { Category } from "../../types/category";

type Props = {
    category: Category;
};

export function CategoryItem({ category }: Props) {
    return (
        <Link href={`/categories/${category.id}`} asChild>
            <Pressable style={styles.itemContainer}>
                <ImageBackground
                    source={{ uri: category.cover }}
                    style={styles.itemImage}
                    resizeMode="cover"
                >
                    <View style={styles.itemOverlay} />
                    <Text style={styles.itemText}>
                        {category.title}
                    </Text>
                </ImageBackground>
            </Pressable>
        </Link>
    );
}