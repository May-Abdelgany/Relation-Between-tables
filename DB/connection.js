import sql from "mysql2";

const DB = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ass4",
});

export default DB;
