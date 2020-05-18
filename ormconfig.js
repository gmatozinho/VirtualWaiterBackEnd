require('dotenv').config()

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    "./build/entity/*{.js,.ts}"
  ],
  logging: true,
  migrations: [
    "./build/migration/*.js"
  ],
  cli: {
    migrationsDir: "./db/migration"
  }
}