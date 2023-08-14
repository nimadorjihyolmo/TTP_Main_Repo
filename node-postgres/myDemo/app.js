const pg = require("pg");
const Client = pg.Client;
 // OR
 // const { Client } = require("pg");

 (async() => {
    const client = new Client({
        host: "localhost",
        database: "test_db",
        user: "nima_sherpa"
    });

    await client.connect();

    const resultSet =  await client.query(`
    INSERT INTO test_table (name, age) VALUES ('Ramen', 22)`);
    


    // const resultSet = await client.query(`SELECT * FROM test_table`);

    console.log(resultSet.rows);

    await client.end();
 })();