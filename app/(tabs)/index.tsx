import React, { useCallback, useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { CustomText } from "@/components/CustomText";
import { Login } from "@/components/home/login";
import { PageWrapper } from "@/components/page-wrapper";
import { View, ScrollView, RefreshControl } from "react-native";
import { getLastRates } from "@/services/rate";
import { RateType } from "@/shared/types/rate";
import { emoticons } from "@/components/rate/utils";
import { Image } from "expo-image";
import { useFocusEffect } from "@react-navigation/native";
import { Link } from "expo-router";

export default function HomeScreen() {
  const { t, currentLocale } = useTranslations();
  const [rates, setRates] = React.useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const user = {
    name: "John Doe",
    email: "jhon@gmail.com",
  };

  const loadRates = useCallback(() => {
    setRefreshing(true);
    getLastRates()
      .then(setRates)
      .catch((err) => console.log(err))
      .finally(() => setRefreshing(false));
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadRates();
    }, [])
  );

  const getFormattedDate = (date: string) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleDateString(currentLocale, { month: "short" });
    return `${day} ${month}`;
  };

  if (!user) {
    return <Login />;
  }

  return (
    <PageWrapper>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, height: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadRates} />
        }
      >
        <CustomText classes="font-bold text-2xl">
          {t("welcome", {
            name: user.name,
          })}
        </CustomText>
        <View className="my-5">
          <CustomText classes="text-xs uppercase ">
            Tús últimas valoraciones
          </CustomText>
          {rates?.length ? (
            rates.map((rate: RateType) => (
              <Link
                href={{
                  pathname: "/(tabs)/[date]",
                  params: { date: rate.date },
                }}
                className="my-2 mt-4"
                key={rate.id}
              >
                <View className="flex relative w-full flex-row justify-between h-24 bg-white rounded-lg shadow-md">
                  <View className="p-4 w-4/6">
                    <CustomText classes="font-semibold uppercase text-xl">
                      {getFormattedDate(rate.date)} -{" "}
                      <CustomText classes="text-gray-800 font-bold text-tertiary">
                        {t(
                          `emotions.${
                            emoticons.find((e) => e.value === rate.rate)?.label
                          }`
                        )}
                      </CustomText>
                    </CustomText>
                    <CustomText>
                      {t("tags", {
                        count: rate.tags.length,
                      })}
                    </CustomText>
                    <View className="w-4/6">
                      <CustomText classes="text-xs italic" numberOfLines={1}>
                        {rate.comment ? rate.comment : t("no-comment")}
                      </CustomText>
                    </View>
                  </View>
                  <View
                    className={` w-2/6 rounded-r h-full px-6 flex items-center flex-col justify-center `}
                  >
                    <Image
                      className="object-contain w-14 h-14"
                      source={
                        emoticons.find((e) => e.value === rate.rate)?.image
                      }
                    />
                  </View>
                  <View
                    className={`absolute h-full w-1.5 ${
                      emoticons.find((e) => e.value === rate.rate)?.color
                    } rounded-r top-0 right-0`}
                  />
                </View>
              </Link>
            ))
          ) : (
            <CustomText classes="text-xs italic my-3">
              No tienes valoraciones
            </CustomText>
          )}
        </View>
      </ScrollView>
    </PageWrapper>
  );
}
