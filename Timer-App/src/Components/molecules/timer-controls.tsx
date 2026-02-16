import { StyleSheet, View } from "react-native";

import { PauseButton } from "@/Components/atoms/pause-button";
import { RestartButton } from "@/Components/atoms/restart-button";
import { StartButtom } from "@/Components/atoms/start-button";
import { CloseButton } from "../atoms/close-button";
 
interface Props {
  onStart: () => void;
  onPause: () => void;
  onRestart: () => void;
  onClear: () => void;
  isActive: boolean;
}

export function TimerControls({
  onStart,
  onPause,
  onRestart,
  onClear,
  isActive,
}: Props) {
  return (
    <View style={styles.container}>
      <CloseButton onPress={onClear}/>
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
    gap: 5,
  },
});
