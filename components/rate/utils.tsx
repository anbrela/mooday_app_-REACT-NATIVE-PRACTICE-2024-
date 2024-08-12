import { Dimensions } from "react-native";
import React from "react";
import { EmotionStep } from "./emotion-step";

const { width } = Dimensions.get("window");

export const emoticons = [
  {
    id: 1,
    image: require("@/assets/images/emotions/upset.svg"),
    color: "bg-red-200",
    value: 1,
  },
  {
    id: 2,
    image: require("@/assets/images/emotions/notgood.svg"),
    color: "bg-orange-200",
    value: 2,
  },
  {
    id: 3,
    image: require("@/assets/images/emotions/normal.svg"),
    color: "bg-yellow-200",
    value: 3,
  },
  {
    id: 4,
    image: require("@/assets/images/emotions/good.svg"),
    color: "bg-green-200",
    value: 4,
  },
  {
    id: 5,
    image: require("@/assets/images/emotions/fantastic.svg"),
    color: "bg-green-800",
    value: 5,
  },
];

export const rateSteps = [
  {
    id: 1,
    title: "¿Qué tal ha sido tu día?",
    description:
      "Aquí podrás calificar tu día, para que podamos mejorar tu experiencia.",
    image: require("@/assets/images/rate.svg"),
    content: <EmotionStep />,
  },
  {
    id: 2,
    title: "¿Qué tal ha sido tu día?",
    description:
      "Aquí podrás calificar tu día, para que podamos mejorar tu experiencia.",
    image: require("@/assets/images/rate.svg"),
    content: <EmotionStep />,
  },
  {
    id: 3,
    title: "¿Qué tal ha sido tu día?",
    description:
      "Aquí podrás calificar tu día, para que podamos mejorar tu experiencia.",
    image: require("@/assets/images/rate.svg"),
    content: <EmotionStep />,
  },
];

export type Step = {
  id: number;
  title: string;
  description: string;
  image: any;
  content: any;
};
