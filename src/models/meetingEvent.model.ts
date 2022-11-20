import { DataTypes, Model, Optional } from "sequelize/types";
import sequelize from "./sequelize";
import Company from "./company.model";
import Contact from "./contact.model";
import UserModel from "./users/user";
export interface MeetingEventAttributes {
    id: number,
    contactId: number,
    companyId: number,
    title: string,
    allDay?: boolean | null | undefined,
    start: Date,
    end: Date,
    description?: string | null | undefined,
    createdBy: number
}

interface MeetingEventCreationAttributes extends Optional<MeetingEventAttributes, 'id' | 'allDay' | 'description'>{}

export interface MeetingEventInstance extends Model<MeetingEventAttributes, MeetingEventCreationAttributes>, MeetingEventAttributes {}

class MeetingEvent extends Model<MeetingEventAttributes, MeetingEventCreationAttributes> implements MeetingEventAttributes {
    declare id: number;
    declare contactId: number;
    declare companyId: number;
    declare title: string;
    declare allDay?: boolean | null | undefined;
    declare start: Date;
    declare end: Date;
    declare description?: string | null | undefined;
    declare createdBy: number;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

MeetingEvent.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    contactId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Contact,
            key: 'id'
        }
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Company,
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    allDay: {
        type: DataTypes.BOOLEAN
    },
    start: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end: {
        type: DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id'
        }
    }
}, {
    tableName: 'meeting_events',
    sequelize
})

export default MeetingEvent;