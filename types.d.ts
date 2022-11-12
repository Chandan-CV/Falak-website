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
    coordinators:CoordinatorsData[] ;
}

export interface CoordinatorsData{
    name:string;
    phone:number;
    email: string;
    image:string;
}
export interface Tile{
    name:string;
    description:string;
    pass: "Silver"|"Gold"|"Platinum"|"Bronze";
    image:string;
    date: string;
    imageUrl:string;
}

export interface OurTeam{
    name:string;
    year: "1"|"2";
    position:string;
    imageURL:string;
}