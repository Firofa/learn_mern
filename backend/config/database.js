import { Sequelize } from "sequelize";

const db = new Sequelize('self_db_mern', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;