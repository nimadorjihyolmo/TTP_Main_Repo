
const express = require("express");
const app = express();

app.get("/", (req, res) => {  // req: from client to server // res: from server to client //// res.send: responding with 'send' built in function 
  res.send(`                    
    <html>
        <head>
            <Title>Cars and Trucks</Title>
        </head>
        <body>
            <h1>The latest cars and trucks!</h1>
        </body>
    </html>`);
});

app.get("/cars", (req, res) => {
  res.send(`cars`);
});


app.get("/trucks", (req, res) => {
  res.send(`trucks`);
});

// const PORT = 1337;
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });


// different way of opening PORT
app.listen(1337, function(req, res){
  console.log("running");
});

