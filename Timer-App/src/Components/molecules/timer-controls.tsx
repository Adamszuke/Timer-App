import { StyleSheet, View } from "react-native";

import { PauseButton } from "@/Components/atoms/pause-button";
import { RestartButton } from "@/Components/atoms/restart-button";
import { StartButtom } from "@/Components/atoms/start-button";

interface Props {
  onStart: () => void;
  onPause: () => void;
  onRestart: () => void;
}

export function TimerControls({ onStart, onPause, onRestart }: Props) {
  return (
    <View style={styles.container}>
      <StartButtom onPress={onStart} />
      <PauseButton onPress={onPause} />
      <RestartButton onPress={onRestart} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
  },
});
