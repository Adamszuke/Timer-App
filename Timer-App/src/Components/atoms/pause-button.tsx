import {
    TouchableOpacity,
    Image,
    StyleSheet
} from "react-native"

import { colors } from "@/styles/Colors";

interface Props {
    onPress: () => void;
}

export function PauseButton({ onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <Image 
                source={require("@/assets/pause-button.png")}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        marginTop: 20,
        tintColor: colors.white[100], // Aplica a cor branca à imagem
    }
})