import React from "react";
import { Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  className?: string;
}

// Mapeo de las clases Tailwind a las variantes de la fuente Poppins
const fontMap: { [key: string]: string } = {
  "font-thin": "PoppinsThin",
  "font-extralight": "PoppinsExtraLight",
  "font-light": "PoppinsLight",
  "font-regular": "PoppinsRegular",
  "font-medium": "PoppinsMedium",
  "font-semibold": "PoppinsSemiBold",
  "font-bold": "PoppinsBold",
  "font-extrabold": "PoppinsExtraBold",
  "font-black": "PoppinsBlack",
  italic: "PoppinsItalic",
};

// Función para obtener la familia de fuentes basada en las clases
const getFontFamily = (className: string | undefined) => {
  if (!className) return "PoppinsRegular";

  const classNames = className.split(" ");
  console.log("classNames", classNames);
  for (const cls of classNames) {
    console.log("cls", cls);
    if (fontMap[cls]) {
      return fontMap[cls];
    }
  }

  return "PoppinsRegular";
};

export const CustomText = ({
  classes,
  style,
  children,
}: {
  classes?: string;
  style?: any;
  children: React.ReactNode;
}) => {
  return (
    <Text
      className={classes}
      style={[{ fontFamily: getFontFamily(classes) }, style]}
    >
      {children}
    </Text>
  );
};
