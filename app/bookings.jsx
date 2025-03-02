import { Text, View, StyleSheet } from "react-native";

export default function Bookings() {
  return (
    <View style = {styles.container}>
      <Text>Booking Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0"
  }
})