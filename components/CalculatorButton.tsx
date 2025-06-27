import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import * as Haptics from 'expo-haptics';
import { Pressable, Text } from 'react-native';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
    doubleSize?: boolean;
}

const CalculatorButton = ({ label, color = Colors.darkGray, blackText = false, onPress, doubleSize = false }: Props) => {
  return (
    <Pressable style={({pressed}) => ({
      ...globalStyles.button,
      backgroundColor: color,
      opacity: pressed ? 0.8 : 1,
      width: doubleSize ? 180 : 80, 
    })} onPress={() => {
      onPress();
      Haptics.selectionAsync();
    }}>
      <Text style={{
        ...globalStyles.buttonText,
        color: blackText ? 'black' : 'white',
        fontFamily: 'SpaceMono',
      }}>{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton