import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInterface extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInterface>("User",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }},{
        tableName: 'users',
        timestamps: false
    });

sequelize.sync();