export interface EventData{
    name:string;
    fee: number;
    participants: number;
}

export interface EventPageData{
    name:string;
    description:string;
    pass: "Silver"|"Gold"|"Platinum"|"Bronze";
    image:string;
    cordinators: string;
}

export interface Tile{
    name:string;
    description:string;
    pass: "Silver"|"Gold"|"Platinum"|"Bronze";
    image:string;
    date: string;
    imageUrl:string;
}