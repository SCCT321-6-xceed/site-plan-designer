const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//random strings
const saltRounds = 10;

app.use(express.json());
// Bypass cors authentication - allows the browser to make HTTP requests
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// cookie
app.use(
  session({
    key: "user",
    secret: "xceedelectrical-wsu-321-6",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// Database credentials
const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "password",
  database: "siteplandesigner",
});

// POST registration form
app.post("/register", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    //Insert values into the Database
    db.query(
      "INSERT INTO users (email, firstName, lastName, password) VALUES (?, ?, ?, ?)",
      [email, firstName, lastName, hash],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
});

//verify user
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("Requires token");
  } else {
    // store the secret in env "scct321-6-ex..." for more security
    jwt.verify(token, "scct321-6-exceedelectrical", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Failed to Authenticate" });
      } else {
        //save decoded id to userID
        req.userID = decoded.id;
        next();
      }
    });
  }
};

// checks if user is verified
app.get("/UserAuth", verifyJWT, (req, res) => {
  res.send("Authenticated");
});

//GET for User details & stores session user
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

//POST for Logging in
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // sql query to get email
  db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    // if user exist then compare password
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          //Create token after logging in
          const id = result[0].id;
          const token = jwt.sign({ id }, "scct321-6-exceedelectrical", {
            expiresIn: 300,
          });
          req.session.user = result;
          res.json({ auth: true, token: token, result: result });
        } else {
          res.json({
            auth: false,
            message: "Wrong Username or Password Combination",
          });
        }
      });
    } else {
      res.json({ auth: false, message: "No User Exist" });
    }
  });
});

//Backend is listening (on)
app.listen(3001, () => {
  console.log("Server is running - 3001");
});
