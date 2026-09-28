import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Aluno = {
    id: number;
    nome: string;
    cidade: string;
};

const alunos: Aluno[] = [
    { id: 1, nome: "Anderson", cidade: "Guarujá" },
    { id: 2, nome: "Agatha", cidade: "Santos" },
    { id: 3, nome: "Gabriel", cidade: "Santos" },
    { id: 4, nome: "Vitor", cidade: "Santos" },
    { id: 5, nome: "Nathielly", cidade: "São Vicente" },
    { id: 6, nome: "Nathally", cidade: "São Vicente" },
];

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={alunos}
                renderItem={
                    ({ item }) => <Text>{item.nome} - {item.cidade}</Text>
                }
                keyExtractor={item => item.id.toString()}
            ></FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
});

