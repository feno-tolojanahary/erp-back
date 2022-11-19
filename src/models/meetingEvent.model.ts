import { DataTypes, Model, Optional } from "sequelize/types";
import sequelize from "./sequelize";

export interface MeetingEventAttributes {
    id: number,
    contactId: number,
    ownerId: number,
    title: string,
    allDay?: boolean | null | undefined,
    start: Date,
    end: Date,
    description?: string | null | undefined
}

interface MeetingEventCreationAttributes extends Optional<MeetingEventAttributes, 'id' | 'allDay' | 'description'>{}

export interface MeetingEventInstance extends Model<MeetingEventAttributes, MeetingEventCreationAttributes>, MeetingEventAttributes {}

class MeetingEvent extends Model<MeetingEventAttributes, MeetingEventCreationAttributes> implements MeetingEventAttributes {
    declare id: number;
    declare contactId: number;
    declare ownerId: number;
    declare title: string;
    declare allDay?: boolean | null | undefined;
    declare start: Date;
    declare end: Date;
    declare description?: string | null | undefined;

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
            model: {
                tableName: 'contacts',
                schema: 'public'
            },
            key: 'id'
        }
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: 'users',
                schema: 'public'
            },
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
    }
}, {
    tableName: 'meeting_events',
    sequelize
})

export default MeetingEvent;