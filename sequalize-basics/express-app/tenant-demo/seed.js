// 

const {Tenant, Unit, Lease, Pet, User, db} = require("./db");

(async() => {
    await db.sync({ force: true });

    await Tenant.create({
        name: "Orlando",
        phone: "1234567890",
        ssn:"12329299"
    });

    await Tenant.create({
        name: "Nima",
        phone: "917883883",
        ssn:"44466464"
    });
})();
