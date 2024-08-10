import { useTranslations } from "@/hooks/useTranslations";
import { SafeAreaView, View, Text } from "react-native";
import { Image } from "expo-image";

export default function HomeScreen() {
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
      </View>
    </SafeAreaView>
  );
}
