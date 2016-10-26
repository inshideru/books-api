module.exports = {
  database: 'books',
  username: 'postgres',
  password: '123456',
  params: {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
    define: {
      undescored: true,
    },
  },
};
