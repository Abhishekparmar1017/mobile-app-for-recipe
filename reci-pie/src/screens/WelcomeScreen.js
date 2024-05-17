import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../../assets/coffee.webp")} />
      <Text style={styles.preiumtext}>10K+ Preium Recipes</Text>

      <Text style={styles.manetext}>Cook Like A chef</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("recipelist")}
        style={styles.buttuch}
      >
        <Text style={styles.buttext}>Let's Try</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  preiumtext: {
    color: "#f96163",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 60,
  },
  manetext: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#3c44c",
    marginTop: 44,
    marginBottom: 55,
    textAlign: "center",
  },
  buttext: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  buttuch: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    textAlign: "center",
    marginLeft: 40,
  },
});
