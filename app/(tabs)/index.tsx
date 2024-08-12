import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useTranslations } from "@/hooks/useTranslations";
import { CustomText } from "@/components/CustomText";
import { Login } from "@/components/home/login";

export default function HomeScreen() {
  const { t } = useTranslations();

  const user = {
    name: "John Doe",
    email: "jhon@gmail.com",
  };

  if (!user) {
    return <Login />;
  }

  return (
    <SafeAreaView>
      <View>
        <Text>{t("welcome")}</Text>
      </View>
    </SafeAreaView>
  );
}
