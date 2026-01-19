import {
  useEffect,
  useState,
} from "react"
import { 
  Text, 
  View, 
  Alert 
} from "react-native";


import { styles } from "./styles";
import { TimerControls } from "@/Components/molecules/timer-controls";
import { TimerDisplay } from "@/Components/molecules/timer-display";

export default function IndexPage() {

  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0){
      interval = window.setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);
  
  const handleStart = () => setIsActive(true);

  const handlePause = () => setIsActive(false);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Timer App</Text>

      <TimerDisplay seconds={seconds} />
      
      <TimerControls 
        onStart={handleStart} 
        onPause={handlePause} 
      />
      
    </View>
  );
}