import { 
  Text, 
  View, 
  Alert 
} from "react-native";


import { styles } from "./styles";
import { StartButtom } from "@/Components/atoms/start-button"; 
import { PauseButton } from "@/Components/atoms/pause-button";

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
      
      {/* Adicionando o botão aqui */}
      <StartButtom onPress={handleStart} />
      <PauseButton onPress={handlePause} />
      
    </View>
  );
}