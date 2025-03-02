import { Text, View, StyleSheet } from "react-native";

export default function Wallet() {
  return (
    <View style = {styles.container}>
      <Text>Wallet Screen</Text>
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