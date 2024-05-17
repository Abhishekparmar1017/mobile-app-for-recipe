import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../componets/Header";
import SearchFilter from "../componets/SearchFilter";
import CategoriesFilter from "../componets/CategoriesFilter";
import RecipeCard from "../componets/RecipeCard";

const RecipeListScreen = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: 15, marginTop: 50 }}>
      {/* render header */}
      <Header headerText={"Hi, Abhi☺️"} headerIcon={"bell-o"} />
      {/* search filter */}
      <SearchFilter icon="search" placeholder="Enter your fav recipe😋" />

      {/* Categories filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>categories</Text>
        {/* category */}
        <CategoriesFilter />
      </View>
      {/* recipe List */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        {/* Recipes list */}
        <RecipeCard />
      </View>
    </View>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
