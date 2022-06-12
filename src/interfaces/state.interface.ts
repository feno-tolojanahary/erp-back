
export default interface State {
    id: number;
    stateName: string | null;
    stateCode: string | null;
    country: string | null;
    createdBy: number;

    createdAt?: Date;
    updatedAt?: Date;
}