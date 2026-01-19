import { Text, View, Alert } from "react-native";
import { styles } from "./styles";
import { StartButtom } from "@/Components/atoms/start-button"; // Verifique se o caminho está correto

export default function IndexPage() {
  
  const handleStart = () => {
    Alert.alert("Timer iniciado!");
    // Aqui entrará a sua lógica de contagem regressiva
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Timer App</Text>
      
      {/* Adicionando o botão aqui */}
      <StartButtom onPress={handleStart} />
      
    </View>
  );
}