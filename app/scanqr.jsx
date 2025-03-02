import { Text, View, StyleSheet } from "react-native";

export default function ScanQr() {
  return (
    <View style = {styles.container}>
      <Text>Scan QR Screen</Text>
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