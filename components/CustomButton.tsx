import { Pressable, Text } from "react-native";

import { CustomText } from "./CustomText";

type CustomButtonProps = {
  label: string;
  onPress: () => void;
  className?: string;
  kind?: "primary" | "secondary";
  disabled?: boolean;
};

export const Button = ({
  label,
  onPress,
  kind = "primary",
  className,
  disabled,
}: CustomButtonProps) => {
  return (
    <Pressable
      className={`
        mr-1 shadow
        ${
          kind === "primary" ? "bg-primary" : "bg-orange-200"
        } px-6 py-4 rounded   ${className} `}
      onPress={onPress}
      disabled={disabled}
    >
      <CustomText
        classes={` uppercase font-semibold ${
          kind === "primary" ? "text-white" : "text-gray-800"
        }`}
      >
        {label}
      </CustomText>
    </Pressable>
  );
};
