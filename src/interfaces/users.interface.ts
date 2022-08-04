export interface User {
    id: number;
    name: string;

    jobPosition: string | null;
    phone: string | null;
    mobile: string | null;
    email: string | null;
    website: string | null;
    companyId: number | null;
    
    createdAt?: Date;
    updatedAt?: Date;
}