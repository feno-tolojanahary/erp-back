import { Model, Optional } from "sequelize";
import SequelizeAttributes from "@utils/SequelizeAttributes";
// Entity
export interface StateAttributes {
    id: number,
    stateName: string,
    stateCode: string,
    country: string,
    created_by: number;
}

// Creation attribute
interface StateCreationAttributes extends Optional<StateAttributes, 'id'>{}

// Instance
export interface StateInstance extends Model<StateAttributes, StateCreationAttributes>, StateAttributes {}

// Class entity
class State extends Model<StateAttributes, StateCreationAttributes> implements StateAttributes {
    declare id: number;
    declare stateName: string;
    declare stateCode: string;
    declare country: string;
    declare created_by: number;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

// State.init({
//     ...SequelizeAttributes.
// })

