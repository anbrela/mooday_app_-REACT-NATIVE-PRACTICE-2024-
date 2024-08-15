import {
  View,
  ScrollView,
  SafeAreaView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Image } from "expo-image";
import React, { useRef, useEffect, useState } from "react";
import { emoticons } from "./utils";
import { Button } from "../CustomButton";
import { CustomText } from "../CustomText";

type Props = {
  onSubmit: (emotion: number) => void;
  initialEmotion?: number;
  onCancel: () => void;
};

export const EmotionStep = ({ onSubmit, initialEmotion, onCancel }: Props) => {
  const scrollViewRef = useRef(null);
  const [emotionInView, setEmotionInView] = useState(initialEmotion as number);

  useEffect(() => {
    if (scrollViewRef.current) {
      // @ts-ignore
      scrollViewRef.current?.scrollTo({
        x: emoticons.find((e) => e.value === initialEmotion)?.scrollX,
        animated: true,
      });
    }
  }, [initialEmotion]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const itemWidth = 190;
    const indexInView = Math.round(scrollPosition / itemWidth);
    setEmotionInView(emoticons[indexInView]?.value || 3);
  };

  return (
    <SafeAreaView>
      <View className="flex w-full items-center my-3">
        <View className="w-2/6 flex bg-white rounded shadow">
          <View
            style={{
              width: `33.33%`,
            }}
            className={`h-3 w-1/4 rounded bg-rose-300`}
          />
        </View>
      </View>
      <View className="w-full p-8">
        <CustomText classes="font-bold text-2xl">
          ¿Qué tal ha sido tu día?
        </CustomText>
        <CustomText classes="font-light text-lg">
          Aquí podrás calificar tu día, para que podamos mejorar tu experiencia.
        </CustomText>
      </View>
      <ScrollView
        ref={scrollViewRef}
        id="emotion_wrapper"
        horizontal
        snapToEnd={false}
        snapToAlignment="center"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {emoticons.map((emoticon) => (
          <View
            key={emoticon.id}
            className={`
                ${emoticon.id === 5 ? "mr-12 " : ""} 
                ${emoticon.id === 1 ? "ml-12 " : ""} 
               flex h-52 w-[200px] items-center justify-center ${
                 emoticon.color
               } flex-row ${
              emotionInView === emoticon.value
                ? `border-4 border-violet-700`
                : ""
            }`}
          >
            <Image className="object-cover h-32 w-32" source={emoticon.image} />
          </View>
        ))}
      </ScrollView>
      <View className=" w-full justify-center flex-row mt-10">
        <Button kind="secondary" label="Atrás" onPress={onCancel} />
        <Button label="Siguiente" onPress={() => onSubmit(emotionInView)} />
      </View>
    </SafeAreaView>
  );
};
