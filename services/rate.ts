import { post , get} from "@/helpers/api";

export const rateDay = async (data: any) => {
  return post("/api/day-rate", data).then((res) => res.json());
};


export const getDayRate = async (date: string) => {
  return get(`/api/day-rate/${date}`).then((res) => res.json());
}


export const getLastRates = async () => {
  return get(`/api/day-rate/last`).then((res) => res.json());
}