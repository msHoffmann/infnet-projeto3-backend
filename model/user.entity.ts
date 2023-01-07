import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

// padrão typescript: I de interface
interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  role: string;
  active: number;
  pin: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserCreationAttributes = Optional<IUser, "id">;

export class User extends Model<IUser, UserCreationAttributes> {
  declare id: number | null;
  declare name: string | null;
  declare email: string | null;
  declare username: string | null;
  declare password: string | null;
  declare role: string | null;
  declare active: number | null;
  declare pin: string | null;
  declare createdAt: Date | null;
  declare updatedAt: Date | null;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: false,
    },
    pin: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "user",
  }
);
