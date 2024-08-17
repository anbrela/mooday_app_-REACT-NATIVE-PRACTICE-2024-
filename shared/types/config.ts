import { TagType } from "./rate";



export type UserConfigType = {
    id: number;
    checkTime: string;
    userId: number;
    tags: TagType[];
}