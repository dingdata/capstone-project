// config/database.js

module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "capstone_workout_randomiser_dev",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: null,
    database: "capstone_workout_randomiser_dev_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    use_env_variable: `${process.env.DATABASE_URL}?sslmode=require`,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
