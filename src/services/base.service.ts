import { Model } from "sequelize";

export default abstract class BaseService<ModelType extends Model, CreateModelDto> {
    protected Model: any;
    
    constructor(model: any) {
        this.Model = model;
    }

    public async create(data: CreateModelDto): Promise<ModelType> {
        const createdData: Promise<ModelType> = this.Model.create(data);
        return createdData;
    }

    public async findAll(): Promise<ModelType[]> {
        const allData: ModelType[] = await this.Model.findAll();
        return allData;
    }

    public async findByCompany(companyId: number): Promise<ModelType[]> {
        const allData: ModelType[] = await this.Model.findAll({ where: { companyId } });
        return allData;
    }
    

    public async update(data: CreateModelDto, id: number): Promise<ModelType | null> {
        await this.Model.update(data, {where: { id }});
        const updatedData: Promise<ModelType | null> = this.Model.findByPk(id);
        return updatedData;
    }

    public delete(id: number): Promise<number> {
        const destroyedResult: Promise<number> = this.Model.destroy({ where: { id }});
        return destroyedResult;
    }
}