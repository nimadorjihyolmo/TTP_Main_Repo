const Sequelize = require ("sequelize");
const db = new Sequelize("postgres://localhost/animals");

const Dog = db.define("Dog", {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
});

// async function connectToDb(){
//     await Dog.sync({ force: true });
// }
(async() => {
    await Dog.sync({ force: true });

    const pickles = await Dog.create({
        name: "pickles",
        age: 456,
    });

    const panchito = await Dog.create({
        name: "panchito",
        age: 49,
    });

    console.log("Id: ", panchito.id);
    console.log("Name: ", panchito.name);
    console.log("Age: ", panchito.age);
})();

// connectToDb();
