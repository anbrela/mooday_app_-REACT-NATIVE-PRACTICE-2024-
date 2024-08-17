import { Pressable } from "react-native";

import { CustomText } from "./CustomText";
import { cn } from "@/lib/clsx";

type CustomButtonProps = {
  label: string;
  onPress: () => void;
  classes?: string;
  kind?: "primary" | "secondary";
  disabled?: boolean;
};

export const Button = ({
  label,
  onPress,
  kind = "primary",
  classes,
  disabled,
}: CustomButtonProps) => {
  return (
    <Pressable
      className={cn(`
        mr-1 shadow
        ${
          kind === "primary" ? "bg-primary" : "bg-orange-200"
        } px-6 py-4 rounded   ${classes} `)}
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
