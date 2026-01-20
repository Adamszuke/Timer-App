import { StyleSheet, View } from "react-native";

import { PauseButton } from "@/Components/atoms/pause-button";
import { RestartButton } from "@/Components/atoms/restart-button";
import { StartButtom } from "@/Components/atoms/start-button";

interface Props {
  onStart: () => void;
  onPause: () => void;
  onRestart: () => void;
  isActive: boolean;
}

export function TimerControls({
  onStart,
  onPause,
  onRestart,
  isActive,
}: Props) {
  return (
    <View style={styles.container}>
      <RestartButton onPress={onRestart} />
      {isActive ? (
        <PauseButton onPress={onPause} />
      ) : (
        <StartButtom onPress={onStart} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
    gap: 30,
  },
});
