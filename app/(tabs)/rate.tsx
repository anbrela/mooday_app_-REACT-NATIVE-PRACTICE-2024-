import React, { useEffect } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";

import { useForm, Controller } from "react-hook-form";
import { CustomText } from "@/components/CustomText";
import { rateSteps, Step } from "@/components/rate/utils";
import { TERTIARY_COLOR } from "@/constants/Colors";
import { Button } from "@/components/CustomButton";

export const Rate = () => {
  const [step, setStep] = React.useState<number>(1);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView>
      <View className="flex flex-col h-full">
        <View className="flex w-full items-center my-3">
          <View className="w-2/6 flex bg-white rounded shadow">
            <View
              style={{
                width: `${(step * 100) / rateSteps.length}%`,
              }}
              className={`h-3 w-1/4 rounded bg-rose-300`}
            />
          </View>
        </View>
        <View className="">
          {rateSteps.map((rateStep: Step) => {
            if (rateStep.id === step)
              return (
                <View key={rateStep.id} className="w-full p-8">
                  <CustomText classes="font-bold text-2xl">
                    {rateStep.title}
                  </CustomText>
                  <CustomText classes="font-light text-lg">
                    {rateStep.description}
                  </CustomText>
                  {rateStep.content}
                </View>
              );
          })}
        </View>

        <View className=" w-full justify-center flex-row ">
          <Button label="Siguiente" onPress={() => setStep(step + 1)} />
        </View>
      </View>
      {/*  <View className="flex flex-col h-full">
          
          className={`w-full px-8 flex flex-col flex-grow border-t shadow bg-indigo-50 pt-4`}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Comment"
                onBlur={onBlur}
                editable
                multiline
                numberOfLines={10}
                className="h-24 shadow-md rounded-lg w-full bg-white my-2 pl-4 pt-4"
                onChangeText={onChange}
                maxLength={200}
                value={value}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Last name"
                onBlur={onBlur}
                className="h-12 shadow-md rounded-lg w-full bg-white my-2 pl-4"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
          />

          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View> */}
    </SafeAreaView>
  );
};

export default Rate;
