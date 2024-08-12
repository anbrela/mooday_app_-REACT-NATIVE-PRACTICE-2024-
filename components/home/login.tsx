import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useTranslations } from "@/hooks/useTranslations";
import { CustomText } from "@/components/CustomText";

export const Login = () => {
  const { t } = useTranslations();

  return (
    <SafeAreaView>
      <View className="p-8 w-full h-full relative">
        <Text className="text-4xl">{t("welcome")}</Text>
        <Text>hados</Text>
        <View className="w-full flex flex-row justify-center">
          <Image
            className="h-96 o w-full max-w-xl"
            source={require("@/assets/images/home.svg")}
          />
        </View>
        <View>
          <CustomText classes="text-3xl font-light">{t("login")}</CustomText>
          <Text>Mooday</Text>
        </View>
        <CustomText classes="font-black">
          This will be a login button
        </CustomText>
        <Text>This will be a Apple button</Text>
      </View>
    </SafeAreaView>
  );
};
