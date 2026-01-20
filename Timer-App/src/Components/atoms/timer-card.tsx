import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "@/styles/Colors";

interface Props {
  onPress: () => void;
}

export function TimerCard({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image source={require("@/assets/timer-icon.png")} style={styles.image} />
      <Text style={styles.title}>Temporizador</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.red[200],
    padding: 24,
    borderRadius: 25,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.black[100],
    width: "100%",
  },
  image: {
    width: 35,
    height: 35,
    tintColor: colors.white[100],
  },
  title: {
    color: colors.white[100],
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },
});
