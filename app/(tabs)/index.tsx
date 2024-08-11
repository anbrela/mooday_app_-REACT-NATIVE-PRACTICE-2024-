import React, { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import { View, Text, SafeAreaView, Button, Platform } from "react-native";
import { Image } from "expo-image";
import { useTranslations } from "@/hooks/useTranslations";

export default function HomeScreen() {
  const [userInfo, setUserInfo] = useState(null);
  const { t } = useTranslations();

  const redirectUri = Platform.select({
    web: window?.location?.origin,
    default: `https://auth.expo.io/@pablonaveira/mooday`, // Ajusta este valor según tu configuración
  });

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "128876708418-a8fe278bshvimcn75f9tk5ah158n2fub.apps.googleusercontent.com",
    iosClientId:
      "128876708418-ef46h5khhd5noil2i9llef07bdfaqjg0.apps.googleusercontent.com",
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    webClientId:
      "128876708418-a8fe278bshvimcn75f9tk5ah158n2fub.apps.googleusercontent.com",
    redirectUri,
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      // Aquí puedes hacer una solicitud a la API de Google con el token para obtener la información del usuario
      console.log(authentication);
    }
  }, [response]);

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
        <Button
          disabled={!request}
          title="Sign in with Google"
          onPress={() => {
            promptAsync();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
