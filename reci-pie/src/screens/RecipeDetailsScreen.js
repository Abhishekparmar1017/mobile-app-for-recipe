import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <View style={styles.safearray}>
        <Pressable style={styles.iconstyle} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>
        <FontAwesome name={"heart-o"} size={28} color="white" />
      </View>
      <View style={styles.seconndview}>
        <View style={styles.threedview}>
          <Image source={item.image} style={styles.img} />
        </View>
        {/* Recipe Name */}
        <Text style={{ marginTop: 160, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Recipe Description */}
            <Text style={{ fontSize: 20, marginVertical: 20, margin: 15 }}>
              {item.description}
            </Text>
            {/* Recipe Extra Details */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255,0,0,0.28)",
                  paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(135,206,235,0.5)",
                  paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🥣</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255,165,0,0.48)",
                  paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.calories}
                </Text>
              </View>
            </View>

            {/* Recipe Ingredients */}
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  marginVertical: 20,
                  margin: 15,
                }}
              >
                Ingredients
              </Text>
              {item.ingredients.map((ingredient) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 14,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text
                      style={{
                        fontSize: 18,
                        marginLeft: 6,
                        marginBottom: 6,
                        marginVertical: 20,
                        margin: 15,
                      }}
                    >
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>
            {/* Recipe Steps */}
            <View
              style={{
                alignSelf: "flex-start",
                marginVertical: 22,
                marginBottom: 6,
                marginVertical: 20,
                margin: 15,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "600" }}>steps</Text>
              {item.steps.map((step, index) => {
                return (
                  <Text
                    style={{
                      fontSize: 18,
                      // marginLeft: 6,
                      marginVertical: 6,
                      marginBottom: 6,
                      marginVertical: 20,
                      margin: 15,
                    }}
                  >
                    {`${index + 1} )
                    ${step}`}
                  </Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  safearray: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 50,
    flexDirection: "row",
    marginHorizontal: 16,
  },
  iconstyle: {
    flex: 1,
  },
  seconndview: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: -300,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
  },
  threedview: {
    // backgroundColor:"red",
    height: 300,
    width: 300,
    position: "absolute",
    top: -150,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
