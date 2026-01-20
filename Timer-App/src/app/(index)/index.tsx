import { Text, View } from "react-native";

import { useRouter } from "expo-router";

import { TimerCard } from "@/Components/atoms/timer-card";
import { styles } from "./styles";

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo!</Text>
      </View>

      <View style={styles.menuContainer}>
        <TimerCard onPress={() => router.push("./timer")} />
      </View>
    </View>
  );
}
