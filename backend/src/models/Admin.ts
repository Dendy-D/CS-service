import { DataTypes, Optional, Model } from 'sequelize';
// import { sequelize } from '../database/db';

interface AdminAttributes {
  id: string,
  login: string,
  password: string,
  fullName: string,
  phoneNumber: string,
  position: string,
}

type AdminCreationAttributes = Optional<AdminAttributes, 'id'>

type AdminInstance = Model<AdminAttributes, AdminCreationAttributes>

const Admin = sequelize.define<AdminInstance>(
  'Admin',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    login: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

export default Admin;
