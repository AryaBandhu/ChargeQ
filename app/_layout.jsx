import { Tabs } from "expo-router/tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function RootLayout() {
  return ( <Tabs>
    <Tabs.Screen name="index" options={{ title: "Home",
      tabBarIcon : ({color,size}) => (
        <Icon name = "Home" size={size} color = "red"/>
      )
    }} />

    <Tabs.Screen name="bookings" options={{ title: "Bookings" }} />

    <Tabs.Screen name="scanqr" options={{ title: "Scan QR" }} />

    <Tabs.Screen name="wallet" options={{ title: "Wallet" }} />
    
    
  </Tabs>
  )
}
