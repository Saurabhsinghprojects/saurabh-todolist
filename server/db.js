const Pool = require("pg").Pool;

const pool = new Pool({
  user: "rzmqefvrtnevvu",
  password: "kthl8822",
  host: "ec2-3-217-14-181.compute-1.amazonaws.com",
  port: 5432,
  database: "d7q1uus5qgebbn"
});

module.exports = pool;
