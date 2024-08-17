import { get } from "@/helpers/api";


export const getUserConfig = async () => {
    return get("/api/user-config").then((res) => res.json());
}