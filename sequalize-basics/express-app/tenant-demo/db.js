// created database connection

const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/monopoly");


// creating model for tenant
const Tenant = db.define("tenant", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: Sequelize.STRING,
    ssn: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const Pet = db.define("pet", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: Sequelize.STRING,
    age: {
        type: Sequelize.STRING,
        age: Sequelize.INTEGER,
    },
});


const User = db.define("user", {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const Unit = db.define("unit", {
    floor: Sequelize.STRING,
    aptNumber: Sequelize.STRING,
    bedrooms: Sequelize.STRING,
    area: Sequelize.INTEGER,
});

const Lease = db.define("lease", {
    beginDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    rent: Sequelize.INTEGER,
    
});


// // One to One
// Tenant.hasOne(User);
// User.belongsTo(Tenant);

User.hasOne(Tenant);
Tenant.belongsTo(User);

//one to many
Tenant.hasMany(Pet);
Pet.belongsTo(Tenant);

// many to many
Tenant.belongsToMany(Unit, {through: Lease});
Unit.belongsToMany(Tenant, {through: Lease});

module.exports = {
    Tenant,     // Tenant: Tenant
    User,       //User: User
    Pet,        //Pet: Pet
    Unit,       //Unit: Unit
    Lease,      //Lease: Lease
    db, 
}