import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const pgUser: string | undefined = process.env.PG_USER;
const pgPwd: string | undefined= process.env.PG_PASSWORD;
const pgDbName: string | undefined = process.env.PG_DB_NAME;
const pgHost: string | undefined = process.env.PG_HOST;
const pgPort: string | undefined = process.env.PG_PORT;

const sequelize = new Sequelize(`postgres://${pgUser}:${pgPwd}@${pgHost}:${pgPort}/${pgDbName}`);
console.log("Models is executed");
(async () => {
    try {
      await sequelize.authenticate();
      console.log("Successfuly connecting to database")
      // await sequelize.sync({ alter: true })
    } catch(err) {
      console.error("Unable connecting to DB: ", err);
    }
  })()

export default sequelize;
