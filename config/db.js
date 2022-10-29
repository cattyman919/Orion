require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Test Connection
// let sql = `
// SELECT projects.id, projects.title, projects.description, projects.status,
// GROUP_CONCAT(languages.language SEPARATOR ',') AS languages, projects.repo
// FROM projects JOIN languages
// ON projects.id = languages.project_ID
// GROUP BY projects.id;
// `;

// pool.execute(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result[0].languages);
// });

module.exports = pool.promise();
