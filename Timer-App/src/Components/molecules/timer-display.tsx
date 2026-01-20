import { StyleSheet, Text, TextInput, View } from "react-native";

import { colors } from "@/styles/Colors";

interface Props {
  seconds: number;
  onChangeTime: (text: string) => void;
  editable: boolean;
}

export function TimerDisplay({ seconds, onChangeTime, editable }: Props) {
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    const formattedMins = mins < 10 ? `0${mins}` : mins;
    const formattedSecs = secs < 10 ? `0${secs}` : secs;

    return `${formattedMins}:${formattedSecs}`;
  };
  return (
    <View style={styles.container}>
      {/* O que o usuário vê */}
      <Text style={[styles.timeText, !editable && { opacity: 0.7 }]}>
        {seconds === 0 ? "00:00" : formatTime(seconds)}
      </Text>
      {/* Se for editável habilita a edição para o campo */}
      {editable && (
        <TextInput
          style={styles.hiddenInput}
          onChangeText={onChangeTime}
          keyboardType="number-pad"
          maxLength={4}
          caretHidden={true}
          autoFocus={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    fontSize: 72,
    fontWeight: "bold",
    color: colors.white[100],
    fontVariant: ["tabular-nums"],
  },
  hiddenInput: {
    ...StyleSheet.absoluteFillObject,
    color: "transparent",
    textAlign: "center",
    fontSize: 72,
  },
});
