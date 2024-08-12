import {
  View,
  ScrollView,
  Dimensions,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Image } from "expo-image";
import React, { useRef, useEffect, useState } from "react";
import { PRIMARY_COLOR, TERTIARY_COLOR } from "@/constants/Colors";
import { emoticons } from "./utils";

export const EmotionStep = () => {
  const scrollViewRef = useRef(null);
  const [emotionInView, setEmotionInView] = useState(3);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current?.scrollTo({
        x: 330,
        animated: true,
      });
    }
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const itemWidth = 200;
    const indexInView = Math.round(scrollPosition / itemWidth);
    setEmotionInView(emoticons[indexInView]?.value || 3);
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        id="emotion_wrapper"
        horizontal
        snapToEnd={false}
        snapToAlignment="center"
        decelerationRate="fast" // Hace que el scroll se detenga rápidamente
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Controla la frecuencia de los eventos onScroll
      >
        {emoticons.map((emoticon) => (
          <View
            key={emoticon.id}
            className={`mt-10 ${
              emoticon.id === 5 ? "mr-24 bg-red-500" : "hidden"
            } flex h-52 w-[200px] items-center justify-center ${
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
    </View>
  );
};
