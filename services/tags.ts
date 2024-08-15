import { get } from "@/helpers/api";

type Props = {
  lang: string;
  name?: string;
};

export const getAllTags = async ({ lang, name }: Props) => {
  if (!name) return get(`/api/tags?lang=${lang}`).then((res) => res.json());

  return get(`/api/tags?lang=${lang}&name=${name}`).then((res) => res.json());
};
