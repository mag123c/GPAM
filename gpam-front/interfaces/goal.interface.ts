import { GPAM } from './gpam.interface';

export interface Goal {
    id: string;
    title: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    gpams: GPAM[];
}
