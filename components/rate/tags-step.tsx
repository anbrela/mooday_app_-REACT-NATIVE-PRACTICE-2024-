import { SafeAreaView, View, TextInput, Pressable } from "react-native";
import { CustomText } from "../CustomText";
import { Button } from "../CustomButton";
import { useEffect } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { getAllTags } from "@/services/tags";
import { useState } from "react";
import { TagType } from "@/shared/types/rate";

type Props = {
  onSubmit: (tags: number[]) => void;
  onGoBack: () => void;
  initialTags: TagType[];
};

export const TagsStep = ({ onSubmit, onGoBack, initialTags }: Props) => {
  const { currentLocale } = useTranslations();
  const [tags, setTags] = useState([]);

  const [selectedTags, setSelectedTags] = useState<number[]>(
    initialTags.map((tag: TagType) => tag.id)
  );

  useEffect(() => {
    getAllTags({ lang: currentLocale })
      .then(setTags)
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView>
      <View className="w-full p-8">
        <CustomText classes="font-bold text-2xl">Modificadores</CustomText>
        <CustomText classes="font-light text-lg mt-1">
          Este es el lugar de añadir mofificadores de día. Los que verás, son
          los añadidos en el perfil.
        </CustomText>
      </View>
      <View className={`w-full flex flex-row flex-wrap px-5`}>
        {tags.map((tag: TagType) => (
          <Pressable
            key={tag.id}
            onPress={() => {
              if (selectedTags.includes(tag.id)) {
                setSelectedTags(selectedTags.filter((t) => t !== tag.id));
              } else {
                setSelectedTags([...selectedTags, tag.id]);
              }
            }}
            className={`w-24 min-h-24 m-3 p-4 flex items-center justify-center ${
              selectedTags.includes(tag.id) ? "bg-tertiary" : "bg-primary"
            }`}
          >
            <CustomText classes="font-bold text-white">{tag.name}</CustomText>
          </Pressable>
        ))}
      </View>
      <View className=" w-full justify-center flex-row mt-4">
        <Button kind="secondary" label="Atrás" onPress={onGoBack} />
        <Button label="Siguiente" onPress={() => onSubmit(selectedTags)} />
      </View>
    </SafeAreaView>
  );
};
