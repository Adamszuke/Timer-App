import { TouchableOpacity } from "react-native";
import { RestartIcon } from "./icons";


interface Props {
  onPress: () => void;
}

export function RestartButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <RestartIcon/>
    </TouchableOpacity>
  );
}

