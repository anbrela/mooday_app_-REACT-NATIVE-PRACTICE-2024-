import { Controller } from "react-hook-form";
import { SafeAreaView, View, TextInput } from "react-native";
import { CustomText } from "../CustomText";
import { Button } from "../CustomButton";

type Props = {
  onSubmit: () => void;
  onGoBack: () => void;
  errors: any;
  control: any;
};

export const CommentStep = ({ onSubmit, onGoBack, errors, control }: Props) => {
  return (
    <SafeAreaView>
      <View className="w-full p-8">
        <CustomText classes="font-bold text-2xl">Modificadores</CustomText>
        <CustomText classes="font-light text-lg mt-1">
          Este es el lugar de añadir mofificadores de día. Los que verás, son
          los añadidos en el perfil.
        </CustomText>
      </View>
      <View className={`w-full px-8 flex flex-col flex-grow shadow pt-4`}>
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
              className="h-24 rounded-lg w-full bg-white my-2 pl-4 pt-4"
              onChangeText={onChange}
              maxLength={200}
              value={value}
            />
          )}
          name="comment"
        />
        {errors.comment && <CustomText>This is required.</CustomText>}
      </View>
      <View className=" w-full justify-center flex-row mt-4">
        <Button kind="secondary" label="Atrás" onPress={onGoBack} />
        <Button label="Siguiente" onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
};
