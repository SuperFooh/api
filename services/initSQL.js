const { Sequelize, DataTypes } = require('sequelize');

//db,use,pwd
sequelize = new Sequelize('test', 'test', 'test', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            instanceName: 'MY_PROJECT'
        }   
    }
});



// el nombre de la tabla se va a pluralizar conforme al nombre del modelo, esto lo rige una biblioteca denominada: "inflection"
// para evitar ello, podemos pasarle una opcion "freezeTableName" = true

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users'
});

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users'
});


// object options tu sync:
// {force: true}
// {alter: true}
User.sync().then(() => console.log('table created!'))

//sequelize.sync() --> syncronizes ALL models

console.log('my models: ', sequelize.models); // true

const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('SQL Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the SQL database:', error);
    }
}

module.exports = checkConnection
