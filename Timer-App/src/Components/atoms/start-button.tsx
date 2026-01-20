import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "@/styles/Colors";

interface Props {
  onPress: () => void;
}

export function StartButtom({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Image
        source={require("@/assets/start-button.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginTop: 35,
    tintColor: colors.white[100], // Aplica a cor branca à imagem
  },
});
