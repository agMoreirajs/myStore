import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
 
export default function TabsLayout() {
  return (
    <Tabs>
    
      <Tabs.Screen name="home" 
      options={{ title: "Início",
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="home" color="#ff69af" size={20} />
      ),
      }}
      />
    
      <Tabs.Screen name="config" options={{ title: "Configurações",
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="gears" color="#ff69af" size={20} />
      ),
      }} />
   
  </Tabs>
  );
}