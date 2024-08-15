import { RateType, TagType } from "@/shared/types/rate";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { CustomText } from "../CustomText";
import { emoticons } from "./utils";
import { Image } from "expo-image";
import { Button } from "../CustomButton";

type Props = {
  alreadyRated: RateType | null;
  setCanRate: React.Dispatch<React.SetStateAction<boolean>>;
  onCancel: () => void;
};

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <View className="flex flex-row flex-wrap">
      {tags.map((tag: TagType) => (
        <View key={tag.id} className="bg-secondary p-2 m-1 rounded">
          <CustomText classes="text-xs text-gray-800 font-semibold">
            {tag.name}
          </CustomText>
        </View>
      ))}
    </View>
  );
};

export const AlreadyRated = ({ alreadyRated, setCanRate, onCancel }: Props) => {
  if (!alreadyRated) return null;

  return (
    <SafeAreaView>
      <View>
        <Image
          className="h-28"
          source={require("@/assets/images/pattern.webp")}
        />
      </View>
      <View className="p-8">
        <CustomText classes="font-bold text-2xl">
          Ya has valorado el día de hoy.
        </CustomText>
        <View className="flex flex-col">
          <View className="mt-4">
            <CustomText classes="text-xs uppercase my-2">
              Valoración:
            </CustomText>
            <View>
              <Image
                className="h-16 w-16"
                source={
                  emoticons.find((e) => e.value === alreadyRated.rate)?.image
                }
              />
            </View>
          </View>
          <View>
            <CustomText classes="text-xs uppercase my-2">
              Modificadores
            </CustomText>
            <Tags tags={alreadyRated.tags} />
          </View>
          <View className="mt-3">
            <CustomText classes="text-xs uppercase my-2">Comentario</CustomText>
            <CustomText classes="text-xs text-extralight">
              {alreadyRated.comment}
            </CustomText>
          </View>
          <View className="mt-5 flex flex-row">
            <Button kind="secondary" label="Cancelar" onPress={onCancel} />
            <Button
              className=""
              label="Modificar"
              onPress={() => setCanRate(true)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
