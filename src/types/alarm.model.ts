export enum Status {
    ACTIVE = "active",
    CONFIRM = "confirm",
    SKIP = "skip"
}
export interface IAlarm {
    _id: string,
    alarm_time: string,
    name: string,
    description: string,
    status: string
}