require('dotenv').config()
const express = require('express'); //сможем импортировать модули в файл (express)
const sequelize = require('./database') // импортируем обект
const models = require('./models/models')
const cors = require('cors') //импортируем функцию cors для отправки запросов с браузера
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000 // порт на котором наше приложение будет работать

const app = express() // обект вызвал функцию express
app.use(cors());
app.use(express.json())
app.use('/api', router)

app.use(errorHandler) // Обработка ошибок-----

const start = async () => {       // создаем функцию start и делаем ее асинхронной (все операции с БД асинхроны)
     try {
         await sequelize.authenticate() //вызывем функцию authenticate с помощью ее будет устанавливаться подключение к базе данных
         await sequelize.sync() // вызываем функцию sync которая будет сверять состояние БД со схемой данных
         app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) //у app вызываем функцию listen у которой указываем какой порт должен прослушиватть сервер. вторым праметром калл бэк который отработает при успешном запуске сервера
     } catch (e) {
         console.log(e)
     }
}

start() //вызываем функцию для запуска сервера


