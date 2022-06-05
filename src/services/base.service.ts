import { Model } from "sequelize";


export default class BaseService<ModelType extends Model, CreateModelDto> {
    protected model: ModelType extends Model;
    
    constructor(model: ModelType) {
        this.model = model;
    }

    public async create(data: CreateModelDto): Promise<ModelType> {
        const createdData: Promise<ModelType> = this.model.create(data);
        return createdData;
    }

    public async findAll(): Promise<ModelType[]> {
        const allData: ModelType[] = await this.model.findAll();
        return allData;
    }
    

    public async update(data: CreateModelDto, id: number): Promise<ModelType | null> {
        await this.model.update(data, {where: { id }});
        const updatedData: Promise<ModelType | null> = this.model.findByPk(id);
        return updatedData;
    }

    public delete(id: number): Promise<number> {
        const destroyedResult: Promise<number> = this.model.destroy({ where: { id }});
        return destroyedResult;
    }
}