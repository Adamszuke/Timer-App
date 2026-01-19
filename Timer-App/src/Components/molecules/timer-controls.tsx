import {
    View,
    StyleSheet,
} from "react-native";

import { StartButtom } from "@/Components/atoms/start-button";
import { PauseButton } from "@/Components/atoms/pause-button";  

interface Props {
    onStart: () => void;
    onPause: () => void;
}

export function TimerControls({ onStart, onPause }: Props) {
    return (
        <View style={styles.container}>
            <StartButtom onPress={onStart} />
            <PauseButton onPress={onPause} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  
        justifyContent: 'center',
        width: '60%', 
    },
});