import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const emoticons = [
  {
    id: 1,
    image: require("@/assets/images/emotions/upset.svg"),
    color: "bg-red-200",
    label: "sad",
    scrollX: 0,
    value: 1,
  },
  {
    id: 2,
    image: require("@/assets/images/emotions/notgood.svg"),
    color: "bg-orange-200",
    label: "not_good",
    scrollX: width / 2 - 95,
    value: 2,
  },
  {
    id: 3,
    image: require("@/assets/images/emotions/normal.svg"),
    color: "bg-yellow-200",
    label: "normal",
    scrollX: width - 70,
    value: 3,
  },
  {
    id: 4,
    image: require("@/assets/images/emotions/good.svg"),
    color: "bg-green-200",
    label: "good",
    scrollX: width + 125,
    value: 4,
  },
  {
    id: 5,
    image: require("@/assets/images/emotions/fantastic.svg"),
    color: "bg-green-800",
    label: "happy",
    scrollX: width + 380,
    value: 5,
  },
];

export type Step = {
  id: number;
  title: string;
  description: string;
  image: any;
  content: any;
};
