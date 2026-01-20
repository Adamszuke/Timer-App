import { colors } from "@/styles/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red[100],
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  header: {
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white[100],
  },
  menuContainer: {
    gap: 16,
  },
});
