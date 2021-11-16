

console.log(`Hostname: ${process.env.DB_HOST}, USER: ${process.env.DB_USER}, PWD: ${process.env.DB_PASS}`)

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS, 
    DB: "blog",
    dialect: "mysql"
  };