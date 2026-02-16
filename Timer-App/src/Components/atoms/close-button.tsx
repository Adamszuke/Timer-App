import { TouchableOpacity } from "react-native";

import { CloseIcon } from "./icons";

interface Props {
    onPress: () => void;
}


export function CloseButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <CloseIcon/>
    </TouchableOpacity>
  );
}