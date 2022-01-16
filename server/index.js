const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "siteplandesigner",
});

app.post("/create", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    db.query("INSERT INTO users (email, firstName, lastName, password) VALUES (?, ?, ?, ?)",
    [email, firstName, lastName, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Values Inserted")
        }
    }
    );
});

app.listen(3001, ()=> {
    console.log("Server is running - 3001")
});