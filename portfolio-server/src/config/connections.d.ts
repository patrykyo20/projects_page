import database from '../config/connections';

declare module '../config/connections' {
  import { Sequelize } from 'sequelize';
  const database: Sequelize;
  export default database;
}