const {Sequelize} = require ('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //предаем название БД
    process.env.DB_USER, // имя пользователя БД
    process.env.DB_PASSWORD, // пароль БД
    {
        dialect: 'postgres', //диалект СУБД
        host: process.env.DB_HOST, //
        port: process.env.DB_PORT //
    }
)