
const Pool = require("pg").Pool;

let pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "docker_basics",
  password: "admin",
  port: "5432", //default port
});

module.exports = pool;
