import {
    StyleSheet
} from 'react-native';

import { colors } from "@/styles/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red[100],
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle : {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white[100],
  },
})

