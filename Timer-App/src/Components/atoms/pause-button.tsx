import {
    TouchableOpacity,
} from "react-native"

import { PauseIcon } from "./icons";

interface Props {
    onPress: () => void;
}

export function PauseButton({ onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <PauseIcon/>
        </TouchableOpacity>
    )
}