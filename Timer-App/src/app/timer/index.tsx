import { useEffect, useState } from "react";
import { Text, View, Vibration, Alert } from "react-native";

import { TimerControls } from "@/Components/molecules/timer-controls";
import { TimerDisplay } from "@/Components/molecules/timer-display";
import { styles } from "./styles";

export default function IndexPage() {
  const [seconds, setSeconds] = useState(0);
  const [baseTime, setBaseTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleTimeChange = (text: string) => {
    // Substitui todos os carcteres não numéricos por vazio
    const cleaned = text.replace(/[^0-9]/g, "");

    // Pega os caracteres vazios e transforma em 0
    if (cleaned === "") {
      setSeconds(0);
      setBaseTime(0);
      return;
    }

    // Posiciona os números conforme for digitado
    const val = parseInt(cleaned, 10);
    const m = Math.floor(val / 100);
    const s = val % 100;

    const totalSeconds = m * 60 + (s > 59 ? 59 : s);

    setSeconds(totalSeconds);
    setBaseTime(totalSeconds);
  };

  const handleRestart = () => {
    setIsActive(false);
    setSeconds(baseTime);
  };
  const handleClear = () => {
    setIsActive(false); 
    setSeconds(0);      
    setBaseTime(0);     
  };

 

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }else if (isActive && seconds === 0) {
      // O TEMPO ACABOU AQUI
      setIsActive(false);
      Vibration.vibrate([500, 1000, 500, 1000], true);
      Alert.alert(
        "Tempo Esgotado!",
        "O cronômetro chegou ao fim.",
        [
          {
            text: "Silenciar",
            onPress: () => {
              Vibration.cancel(); 
              setSeconds(baseTime); 
            },
          },
        ],
        { cancelable: false } 
      );
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => setIsActive(true);

  const handlePause = () => setIsActive(false);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Timer App</Text>

      <TimerDisplay
        seconds={seconds}
        onChangeTime={handleTimeChange}
        editable={!isActive}
      />

      <TimerControls
        onStart={handleStart}
        onPause={handlePause}
        onRestart={handleRestart}
        onClear={handleClear}
        isActive={isActive}
      />
    </View>
  );
}
