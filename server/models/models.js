const sequelize = require('../database') //исмпортируем обьект sequelize
const {DataTypes} = require('sequelize') // из sequelize импортирукем класс DataTypes с помощью которого описываютсья типы поля (STRING,INTEGER и т.д)

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FirstName: {type: DataTypes.STRING},
    LastName: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING,unique: true},
    password: {type: DataTypes.STRING},
    PhoneNumber: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Doctor = sequelize.define( 'doctor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    LastName: {type: DataTypes.STRING, allowNull: false},
    FirstName: {type: DataTypes.STRING, allowNull: false},
    Surname: {type: DataTypes.STRING, allowNull: false},
    Specialization: {type: DataTypes.STRING},
    Education: {type: DataTypes.STRING},
    AdditionalEducation: {type: DataTypes.STRING},
    Diplomacy: {type: DataTypes.STRING, unique: true},
    Certificate: {type: DataTypes.STRING, unique: true},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Service = sequelize.define( 'service', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ServiceName: {type: DataTypes.STRING, unique: true, allowNull: false},
    Description: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING},
})

const Comment = sequelize.define( 'comment', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: DataTypes.STRING,allowNull: false},
})

const ServiceDoctor = sequelize.define( 'serviceDoctor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Appointment = sequelize.define( 'appointment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Data: {type: DataTypes.DATE},
    Time: {type: DataTypes.TIME},
})

const PriseList = sequelize.define( 'priseList', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    PriceListName: {type: DataTypes.STRING,unique: true,allowNull: false},
    PriceList: {type: DataTypes.STRING,allowNull: false},
})

User.hasMany(Comment)
Comment.belongsTo(User)

Service.hasMany(PriseList)
PriseList.belongsTo(Service)

User.hasMany(Appointment)
Appointment.belongsTo(User)

ServiceDoctor.hasMany(Appointment)
Appointment.belongsTo(ServiceDoctor)

Service.belongsToMany(Doctor, {through: ServiceDoctor})
Doctor.belongsToMany(Service, {through: ServiceDoctor})

module.exports ={ // экспортируем модели дял дольнешего испол
    User,
    Doctor,
    Service,
    Comment,
    ServiceDoctor,
    Appointment,
    PriseList
}
