export interface GPAM {
    id: string;
    title: string;
    progress: number;
    goalId: string;
    isCompleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    plan: string;
    action: string;
    measure: string;
}
