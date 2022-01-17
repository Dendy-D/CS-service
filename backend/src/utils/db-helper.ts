import { Sequelize } from 'sequelize';

export const testConnectionToDataBase = async (sequelizeInstance: Sequelize) => {
  try {
    await sequelizeInstance.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
