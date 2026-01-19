import {
    View,
    Text,
    StyleSheet,
} from "react-native"

import { colors } from "@/styles/Colors"

interface Props {
    seconds: number;
}

export function TimerDisplay({ seconds }: Props) {
    const formatTime = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        const formattedMins = mins < 10 ? `0${mins}` : mins;
        const formattedSecs = secs < 10 ? `0${secs}` : secs;

        return `${formattedMins}:${formattedSecs}`;
    };
    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>{formatTime(seconds)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        fontSize: 72,
        fontWeight: 'bold',
        color: colors.white[100],
        fontVariant: ['tabular-nums']
    },
})