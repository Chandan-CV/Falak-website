export interface EventData{
    name:string;
    fee: number;
    participants: number;
}
export interface EventTilesProps{
    src: string,
    name: string,
    description: string,
    date: string,
    pass: 'bronze'|'silver'|'gold'|'platinum',
}