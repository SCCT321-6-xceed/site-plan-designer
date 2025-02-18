const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require("multer");
// To randomize password string
const saltRounds = 10;

// Bypass cors authentication - allows the browser to make HTTP requests
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
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
      maxAge: 2592000,
    },
  })
);

// Database credentials
const db = mysql.createConnection({
  user: "root", //your username from mysql
  host: "127.0.0.1", // your host name
  password: "password", //your sql password
  database: "siteplandesigner_new", //your sql schema
  dateStrings: true,
});

// POST registration form
app.post("/register", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    //Insert values into the Database
    db.query(
      "INSERT INTO user (email, password, firstName, lastName) VALUES (?, ?, ?, ?)",
      [email, hash, firstName, lastName],
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
  db.query("SELECT * FROM user WHERE email = ?;", email, (err, result) => {
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
            expiresIn: "24h",
          });
          req.session.user = result;
          res.json({ auth: true, token: token, result: result });
        } else {
          res.json({
            auth: false,
            message: "Wrong Password Combination",
          });
        }
      });
    } else {
      res.json({ auth: false, message: "No User Exist" });
    }
  });
});

//logs out user
app.post("/logout", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: false, user: req.session.user });
  }
});

// ------------------------------------------DASHBOARD FUNCTION -------------------------------------------------
//store image
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/sitemap"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});


//insert image into mysql
app.post("/sitemapupload", async (req, res) => {
  try {
    // 'siteplan' is the name of our file input field in the HTML form

    let upload = multer({ storage: storage }).single("siteplan");

    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields

      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }

      const classifiedsadd = {
        image: req.file.filename,
      };
      //update project with image file
      db.query("UPDATE project SET ? ORDER BY projectID DESC LIMIT 1", classifiedsadd, (err, results) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
});


//insert project in mysql table
app.post("/create", (req, res) => {
  const title = req.body.title;
  const client = req.body.client;
  const address = req.body.address;
  const date = req.body.date;
  console.log(date);

  db.query(
    "INSERT INTO project (title, client, address, date) VALUES (?,?,?,?)",
    [title, client, address, date],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.send("Values insert successfully");
      }
    }
  );
});


//retrive project from mysql
app.get("/getProject", (req, res) => {
  db.query("SELECT * FROM project ORDER BY projectID DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//DELETE project on Dashboard page
app.delete("/deleteProject/:projectID", (req, res) => {
  const projectID = req.params.projectID;
  db.query(
    "DELETE FROM project WHERE projectID = ?",
    projectID,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//GET project to pass to design page:
app.get("/passProject/:projectID", (req, res) => {
  const projectID = req.params.projectID;
  console.log(projectID)
  db.query(
    "SELECT * FROM project WHERE projectID = ?",
    projectID,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result)
      }
    }
  );
});

//---------------------------------------LIBRARY/CATEGORY---------------------------------------------------------
//store item
const itemStorage = multer.diskStorage({
  destination: path.join(__dirname, "../public/item"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//insert image into mysql
app.post("/itemupload", async (req, res) => {
  try {
    // 'legends' is the name of our file input field in the HTML form
    let upload = multer({ storage: itemStorage }).single("legends");

    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields

      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }

      const classifiedsadd = {
        image: req.file.filename,
      };
      // UDPATE WHERE
      db.query("UPDATE item SET ? ORDER BY id DESC LIMIT 1",[classifiedsadd], (err, results) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
});



// insert legend item in mysql table
app.post("/addItem", (req, res) => {

  const name = req.body.legend_name;
  const price = req.body.price;
  const category_id = req.body.category;

  db.query(
    "INSERT INTO item (name, price, category_id) VALUES (?,?,?)",
    [name, price, category_id],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.send("Values insert successfully");
      }
    }
  );
});

//insert category in mysql table
app.post("/addCategory", (req, res) => {
  const categoryName = req.body.categoryName;

  db.query(
    "INSERT INTO category (categoryName) VALUES (?)",
    [categoryName],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.send("Values insert successfully");
      }
    }
  );
});

//retrive legend category from mysql
app.get("/getCategory", (req, res) => {
  db.query("SELECT * FROM category ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Displays the items according to the category name
app.post("/CategoryItem", (req, res) => {
  const selectedIndex = req.body.selectedIndex;
  console.log(req.body.selectedIndex);

  db.query(
    "SELECT * FROM category, item WHERE category_id = ? AND category.id = item.category_id",
    [selectedIndex],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
        console.log(result);
      }
    }
  );
});

// retrive legend item from mysql
app.get("/getItem", (req, res) => {
  db.query(
    "SELECT * FROM item ORDER BY id DESC",

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//DELETE category on Library page
app.delete("/deleteCategory/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.query("DELETE FROM category WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//DELETE legend item in category on Library page
app.delete("/deleteItem/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM item WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//Backend is listening (on)
app.listen(3001, () => {
  console.log("Server is running - 3001");
});