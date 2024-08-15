import React from "react";
import { SafeAreaView, View } from "react-native";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="bg-gray-100 h-full">
      <View className="p-8 flex flex-col">{children}</View>
    </SafeAreaView>
  );
};
