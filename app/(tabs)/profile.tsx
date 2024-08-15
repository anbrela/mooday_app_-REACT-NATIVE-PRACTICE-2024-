import React from "react";
import { SafeAreaView, View } from "react-native";
import { CustomText } from "@/components/CustomText";


const user = {
  name: "John Doe",
  email: ""
}

export const Profile = () => {
  return (
    <SafeAreaView>
      <View className="p-8 w-full">
        <View>
          <CustomText classes="">Zona de perfil</CustomText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
