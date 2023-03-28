import { useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";

const bgColor = "#fefbf6";
const bgWhite = "#ffffff";
const black = "#000000";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    alignItems: "center",
    justifyContent: "space-between",
  },
  topHatContainer: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    borderColor: bgColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  topHat: {
    width: 80,
    height: 80,
  },
  storiesContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  storyContainer: {
    // flex: 1,
    justifyContent: "end",
    alignItems: "baseline",
    width: "80%",
    backgroundColor: bgWhite,
    // elevation
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  storyTextContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  storyTitle: {
    fontSize: "16px",
    color: "#333332",
    fontWeight: "bold",
  },
  storyDescription: {
    fontSize: "16px",
    color: "#333332",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingHorizontal: "10px",
  },
  downArray: {
    marginTop: "10px",
  }
});

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.topHatContainer}>
        <Image
          style={styles.topHat}
          source={require("../../assets/thinking_cap1.png")}
        />
      </View>
      <View style={styles.storiesContainer}>
        <View style={styles.storyContainer}>
          <View style={styles.storyTextContainer}>
          <Text style={styles.storyTitle}>Sleep Hollow</Text>
          <Text style={styles.storyDescription}>No other sounds were ever heard from the basement anymore. They always wondered if ....</Text>
          </View>
        </View>
        <View style={styles.storyContainer}>
          <View style={styles.storyTextContainer}>
          <Text style={styles.storyTitle}>No Nonsense</Text>
          <Text style={styles.storyDescription}>Finally someone showed up with a glass of water! Sue frantically leaped towards the fisherman and ....</Text>
          </View>
        </View>
        <View>
      </View>
      </View>
    </View>
  );
}
