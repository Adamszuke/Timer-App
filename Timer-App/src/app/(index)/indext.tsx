import { 
  Text, 
  View, 
  Alert 
} from "react-native";


import { styles } from "./styles";
import { TimerControls } from "@/Components/molecules/timer-controls";

export default function IndexPage() {
  
  const handleStart = () => {
    Alert.alert("Timer iniciado!");
  };

  const handlePause = () => {
    Alert.alert("Timer pausado!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Timer App</Text>
      
      <TimerControls 
        onStart={handleStart} 
        onPause={handlePause} 
      />
      
    </View>
  );
}