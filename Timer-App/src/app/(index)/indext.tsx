import {
    Text,
    View
} from "react-native";

import { styles } from "./styles";

export default function IndexPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Timer App</Text>
        </View>
    );
}
