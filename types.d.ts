export interface EventData{
    name:string;
    fee: number;
    participants: number;
}

export interface EventPageData{
    name:string;
    description:string[];
    pass: "Silver"|"Gold"|"Platinum"|"Bronze"|"Sports"|"Fashion";
    image:string;
    coordinators:CoordinatorsData[] ;
    cashprize?: number
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

export interface individualTeamMember{
    name:string;
    position:string;
    image:string;
}
export interface OurTeam{
    1: individualTeamMember[],
    2: individualTeamMember[],
    3: individualTeamMember[],
}

export interface userData{
    name: string
    
}