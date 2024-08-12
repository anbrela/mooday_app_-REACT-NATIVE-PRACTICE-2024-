import { Pressable, Text } from "react-native";

import { CustomText } from "./CustomText";

type CustomButtonProps = {
  label: string;
  onPress: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  label,
  onPress,
  className,
  disabled,
}: CustomButtonProps) => {
  return (
    <Pressable
      className={`bg-violet-500 px-4 py-2 rounded   ${className} `}
      onPress={onPress}
      disabled={disabled}
    >
      <CustomText classes="text-white uppercase text-xs">{label}</CustomText>
    </Pressable>
  );
};
