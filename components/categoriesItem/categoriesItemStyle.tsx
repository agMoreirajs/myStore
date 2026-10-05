import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 16,
        marginVertical: 10,
        borderRadius: 16,
        overflow: "hidden",
    },
    itemImage: {
        width: "100%",
        height: 140,
        justifyContent: "center",
        alignItems: "center",
    },
    itemOverlay: {
        backgroundColor: "rgba(0, 0, 0, 0.35)",
    },
    itemText: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 1,
    },
});