import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { GRAY, PRIMARY_COLOR } from "@/constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          title: "Home",
          headerShown: false,
          tabBarIconStyle: { marginBottom: -10 },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={30}
              name={focused ? "home" : "home-outline"}
              color={focused ? PRIMARY_COLOR : GRAY}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarShowLabel: false,
          tabBarIconStyle: { marginBottom: -10 },
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6
              name="user"
              size={30}
              color={focused ? PRIMARY_COLOR : GRAY}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIconStyle: { marginBottom: -10 },
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6
              name="chart-simple"
              size={30}
              color={focused ? PRIMARY_COLOR : GRAY}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="rate"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIconStyle: { marginBottom: -10 },
          title: "rate",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6
              name="calendar-plus"
              size={30}
              color={focused ? PRIMARY_COLOR : GRAY}
            />
          ),
        }}
      />
    </Tabs>
  );
}
