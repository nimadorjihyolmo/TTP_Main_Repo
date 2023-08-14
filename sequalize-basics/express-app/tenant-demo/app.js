const express = require("express");
const app = express();
const PORT = 3000;
const { Tenant } = require("./db");



//an example of RESTful routing
//route for all tenants
app.get("/tenants", async(req, res) => {
    const allTenant = await Tenant.findAll();
    res.send(allTenants);
});

// tenants with id
app.get("/tenants/:id", async(req, res) => {
    const aTenant = await Tenant.findByPk(req.params.id);
    res.send(aTenant);
});


app.post("/tenants", (req, res) => {
    res.send("Creates a tenant");
});

app.put("/tenants/:id", (req, res) => {
    // update a tenant
    res.send("Update a tenant");
});

app.delete("/tenants/:id", (req, res) => {
    // delete a tenant
    res.send("Delete a tenant");
});


//TODO: add error handler


// listen port 
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

