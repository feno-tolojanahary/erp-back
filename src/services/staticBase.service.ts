
export default class StaticBaseService {
    protected Model: any;
    
    constructor(model: any) {
        this.Model = model;
    }

    public async findAll(): Promise<any[]> {
        const allData: any[] = await this.Model.findAll();
        return allData;
    }
}