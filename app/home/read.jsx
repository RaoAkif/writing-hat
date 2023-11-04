import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Container from "../../components/ui/Container";
import TopHatContainer from "../../components/ui/TopHatContainer";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useGetStory } from "../../utils/api/storiesHook";

export default function Read() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data: selectedStory, isLoading: isLoadingStory } = useGetStory(params.storyId);
  let storyDescription = selectedStory?.description;
  selectedStory?.response?.map((resp) => (storyDescription = storyDescription + " " + resp.description));

  const allHats = selectedStory?.response?.map((resp) => resp.User.hat);
  const uniqueHats = [...new Set(allHats)];

  return (
    <Container>
      <TopHatContainer />
      <TouchableOpacity style={styles.goBack} onPress={() => router.push("home/storiesTab/myStories")}>
        <Image style={styles.goBackIcon} source={require("../../assets/left1.png")} />
      </TouchableOpacity>
      <View style={styles.storiesContainer}>
        {selectedStory && (
          <View style={styles.storyContainer}>
            <View style={styles.storyTextContainer}>
              <Text style={styles.storyTitle}>{selectedStory.title}</Text>
              <Text style={styles.storyDescription}>{storyDescription}</Text>
            </View>
          </View>
        )}

        <View style={styles.hatsList}>
          {uniqueHats?.map((hatId) => (
            <View key={hatId} style={styles.hatContainer}>
              <Image style={styles.hat} source={`../../assets/thinking_cap${hatId}.png`} />
            </View>
          ))}
        </View>
      </View>
    </Container>
  );
}

const bgColor = "#fefbf6";
const bgWhite = "#ffffff";
const black = "#000000";
const buttonbgColor = "#e4504d";
const borderColor = "#bcbcbc";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    alignItems: "center",
  },
  topHatContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: bgColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  topHat: {
    width: 60,
    height: 60,
  },
  goBack: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 10,
    top: 25,
  },
  storiesContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
  },
  storyContainer: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "baseline",
    width: "80%",
    backgroundColor: bgWhite,
    marginBottom: 2,
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
    paddingTop: 15,
    paddingBottom: 5,
  },
  storyTitle: {
    fontSize: 16,
    color: "#333332",
    fontWeight: "bold",
  },
  storyDescription: {
    fontSize: 16,
    color: "#333332",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  downArray: {
    marginTop: 10,
  },
  collaborationContainerInput: {
    width: "100%",
    height: "100%",
  },
  collaborationInput: {
    fontSize: 16,
    color: "#333332",
    textAlign: "center",
    paddingVertical: 10,
  },
  button: {
    width: 80,
    height: 46,
    backgroundColor: buttonbgColor,
    textAlign: "center",
    justifyContent: "center",
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
  buttonText: {
    color: bgWhite,
    fontSize: 16,
  },
  hatsList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  hatContainer: {
    padding: 15,
  },
  hat: {
    width: 40,
    height: 40,
    borderColor,
    borderWidth: 1,
    borderRadius: 50,
  },
});
