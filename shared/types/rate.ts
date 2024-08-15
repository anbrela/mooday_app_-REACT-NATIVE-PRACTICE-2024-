
export type RateType = {
    id: number;
    date: string;
    comment: string;
    label: string;
    tags: TagType[];
    rate: number;
}


export type TagType = {
    id: number;
    name: string;
   lang: string;
   usageCount: number;
}


export type RateDto = {
    comment: string;
    rate: string;
    date?: string;
    tags: number[];
}