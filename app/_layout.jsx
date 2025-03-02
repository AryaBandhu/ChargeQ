import { Tabs } from "expo-router/tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function RootLayout() {
  return ( <Tabs
  screenOptions={{
    tabBarActiveTintColor : "#1A34BD",
    tabBarInactiveTintColor : "gray",
    tabBarStyle : {backgroundColor: "white"},
  }}
  >

    <Tabs.Screen name="index" options={{ title: "Home",
      tabBarIcon : ({color, size}) => (
        <Icon name = "home" size={size} color = {color}/>
      )
    }} />

    <Tabs.Screen name="bookings" options={{ title: "Bookings",
      tabBarIcon : ({color, size}) => (
        <Icon name = "calendar-today" size={size} color = {color}/>
      )
     }} />

    <Tabs.Screen name="scanqr" options={{ title: "Scan QR",
      tabBarIcon : ({color, size}) => (
        <Icon name = "qr-code-scanner" size={size} color = {color}/> 
      )
    }} />

    <Tabs.Screen name="wallet" options={{ title: "Wallet",
      tabBarIcon : ({color, size}) => (
        <Icon name = "account-balance-wallet" size={size} color = {color}/> 
   )
    }} />
    
    <Tabs.Screen name="profile" options={{ title: "Profile",
      tabBarIcon : ({color, size}) => (
        <Icon name = "account-circle" size={size} color = {color}/> 
      )
  }} />

  </Tabs>
  )
}
