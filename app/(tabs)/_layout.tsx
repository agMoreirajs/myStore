import { Tabs } from "expo-router";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color="#ff69af" size={20} />
          ),
        }}
      />

      <Tabs.Screen
        name="config"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gears" color="#ff69af" size={20} />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categorias",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore" color="#ff69af" size={20} />
          ),
        }}
      />
    </Tabs>
  );
}