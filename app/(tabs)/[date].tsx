import React, { useState, useRef, useEffect } from "react";

import { router } from "expo-router";
import { useForm } from "react-hook-form";

import { EmotionStep } from "@/components/rate/emotion-step";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { CustomText } from "@/components/CustomText";
import { TagsStep } from "@/components/rate/tags-step";
import { CommentStep } from "@/components/rate/comment-step";
import { getDayRate, rateDay } from "@/services/rate";
import ConfettiCannon from "react-native-confetti-cannon";
import { RateDto, RateType } from "@/shared/types/rate";
import { useLocalSearchParams } from "expo-router";
import { AlreadyRated } from "@/components/rate/already-rated";

export const Rate = () => {
  const [step, setStep] = React.useState<number>(1);
  const [emotion, setEmotion] = React.useState<number>(3);
  const [tags, setTags] = React.useState<number[]>([]);
  const [alreadyRated, setAlreadyRated] = React.useState<RateType | null>(null);
  const [canRate, setCanRate] = React.useState<boolean>(true);
  const [rated, setRated] = useState(false);
  const {
    date,
  }: {
    date: string;
  } = useLocalSearchParams();
  const confetiRef = useRef(null);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comment: alreadyRated?.comment ?? "",
    },
  });

  useEffect(() => {
    getDayRate(date ?? new Date().toISOString().split("T")[0]).then((data) => {
      if (data?.rate) {
        setAlreadyRated(data);
        setCanRate(false);
        setValue("comment", data.comment);
      }
    });
  }, [rated, date]);

  const resetSteps = () => {
    setStep(1);
    setEmotion(3);
    setTags([]);
    setRated(false);
    setCanRate(false);
    reset();
  };

  const onSubmit = async (data: RateDto) => {
    await rateDay({
      comment: data.comment,
      rate: JSON.stringify(emotion),
      date,
      tags,
    }).then(() => {
      setRated(true);
      setTimeout(() => {
        router.push("/");
        resetSteps();
      }, 1500);
    });
  };

  if (!canRate) {
    return (
      <AlreadyRated
        onCancel={() => {
          resetSteps();
          router.push("/");
        }}
        alreadyRated={alreadyRated}
        setCanRate={setCanRate}
      />
    );
  }

  if (rated) {
    return (
      <SafeAreaView className="bg-tertiary">
        <View className="flex flex-col relative">
          <View className="w-full h-full z-10">
            <ConfettiCannon
              ref={confetiRef}
              count={200}
              origin={{ x: -10, y: 0 }}
              fadeOut={true}
            />
          </View>
          <View className="absolute w-full h-full flex flex-col items-center justify-center px-3">
            <CustomText classes="font-black text-5xl text-white p-4">
              Valoración registrada!
            </CustomText>
            <CustomText classes="text-xs italic">
              Volviendo a la pantalla principal...
            </CustomText>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (step === 2) {
    return (
      <TagsStep
        initialTags={alreadyRated?.tags ?? []}
        onGoBack={() => setStep(step - 1)}
        onSubmit={(tags) => {
          setTags(tags);
          setStep(step + 1);
        }}
      />
    );
  }

  if (step === 3) {
    return (
      <CommentStep
        onSubmit={handleSubmit(onSubmit)}
        onGoBack={() => setStep(step - 1)}
        control={control}
        errors={errors}
      />
    );
  }

  return (
    <EmotionStep
      initialEmotion={alreadyRated?.rate ?? 3}
      onCancel={() => {
        resetSteps();
        router.push("/");
      }}
      onSubmit={(selected) => {
        setStep(step + 1);
        setEmotion(selected);
      }}
    />
  );
};

export default Rate;
