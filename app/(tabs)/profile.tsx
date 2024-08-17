import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import { CustomText } from "@/components/CustomText";
import { PageWrapper } from "@/components/page-wrapper";
import { getUserConfig } from "@/services/config";
import { UserConfigType } from "@/shared/types/config";
import { useTranslations } from "@/hooks/useTranslations";
import { Button } from "@/components/CustomButton";
import { Tags } from "@/components/rate/already-rated";
import { TagType } from "@/shared/types/rate";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const user = {
  id: 2,
  name: "John Doe",
  email: "",
};

export const Profile = () => {
  const { currentLocale } = useTranslations();
  const [config, setConfig] = useState<UserConfigType | null>(null);
  useEffect(() => {
    if (user?.id) {
      getUserConfig().then(setConfig).catch(console.error);
    }
  }, [user]);

  return (
    <PageWrapper>
      <View>
        <CustomText classes="font-bold text-2xl">Tú perfil</CustomText>
        <CustomText classes="font-light my-2">
          Aquí podrás ver y modificar tu información.
        </CustomText>
        <View className="flex flex-col my-4">
          <CustomText classes="font-bold text-lg">
            Hora de notificación:
          </CustomText>
          <CustomText classes="font-extralight text-xs">
            Esta es la hora a la que recibirás diariamente la notificación para
            validar tu día.
          </CustomText>
          <View className="flex flex-row items-center">
            <CustomText classes="my-3 font-bold text-xl">
              {new Date(config?.checkTime as string).toLocaleTimeString(
                currentLocale,
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </CustomText>
            <Button
              onPress={() => {}}
              classes="py-2 px-2 text-xs ml-3"
              label="Modificar"
            />
          </View>
          <View className="my-5">
            <CustomText classes="font-bold text-lg">
              Tus modificadores:
            </CustomText>
            <CustomText classes="font-extralight text-xs">
              Puedes añadir modificadores rápidos para que puedas elegirlos
              cuando valides tu día.
            </CustomText>
            <View className="my-3 flex flex-row items-center flex-wrap">
              <Tags tags={config?.tags as TagType[]} />
              <Pressable className="ml-2" onPress={() => {}}>
                <FontAwesome name="plus" size={24} color="black" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </PageWrapper>
  );
};

export default Profile;
