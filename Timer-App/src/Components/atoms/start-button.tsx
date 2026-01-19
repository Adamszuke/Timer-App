import { 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";

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
    width: 100,
    height: 100,
    marginTop: 20, 
    tintColor: colors.white[100], // Aplica a cor branca à imagem
  }
});