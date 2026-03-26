export interface Attendance {
    id: number;
    userId: number;
    serviceId: number;
    date: string; // ISO date string
    attended: boolean;
}