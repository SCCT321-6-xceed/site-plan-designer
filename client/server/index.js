const express = require('express')
const app = express();
const mysql = require('mysql2')// change your code to mysql if need
const cors = require('cors')
const path = require('path')
const multer = require('multer')
app.use(cors())
app.use(express.json())

//connect to mysql
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'master', //change to your password
    database: 'siteplandesigner',
});

//store image
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../sitemap'),
    filename: function (req, file, cb) {
        // null as first argument means no error
        cb(null, Date.now() + '-' + file.originalname)
    }
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//insert image into mysql
app.post('/imageupload', async (req, res) => {
    try {
        // 'siteplan' is the name of our file input field in the HTML form

        let upload = multer({ storage: storage }).single('siteplan');

        upload(req, res, function (err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields

            if (!req.file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

            const classifiedsadd = {
                image: req.file.filename
            };
            const sql = "INSERT INTO sitemap SET ?";
            db.query(sql, classifiedsadd, (err, results) => {
                if (err) throw err;
                res.json({ success: 1 })

            });

        });

    } catch (err) { console.log(err) }
})


//insert project in mysql table
app.post("/create", (req, res) => {
    const title = req.body.title;
    const client = req.body.client;
    const address = req.body.address;
    const date = req.body.date;

    db.query(
        'INSERT INTO project (title, client, address, date) VALUES (?,?,?,?)',
        [title, client, address, date],
        (err, result) => {
            if (err) {
                console.error(err);
            } else {
                res.send('Values insert successfully')
            }

        }
    );
});
//insert category in mysql table
app.post("/addCategory", (req, res) => {
    const name = req.body.name;

    db.query(
        'INSERT INTO legend_category (name) VALUES (?)',
        [name],
        (err, result) => {
            if (err) {
                console.error(err);
            } else {
                res.send('Values insert successfully')
            }

        }
    );
});
//insert legend item in mysql table
app.post("/addItem", (req, res) => {
    const legend_name = req.body.legend_name;
    const price = req.body.price;

    db.query(
        'INSERT INTO legend_item (legend_name, price) VALUES (?,?)',
        [legend_name, price],
        (err, result) => {
            if (err) {
                console.error(err);
            } else {
                res.send('Values insert successfully')
            }

        }
    );
});

//retrieve image from mysql
app.get("/getSitemap", (req, res) => {
    const id = 1;
    const sql = "SELECT * FROM sitemap WHERE id_sitemap = ? ;"
    db.query(sql, [id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(
                    { siteplan: result[0].siteplan, }
                );
            }
        })
});

//retrive project from mysql
app.get("/getProject", (req, res) => {

    db.query(
        'SELECT * FROM project ',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
//retrive legend item from mysql
app.get("/getItem", (req, res) => {

    db.query(
        'SELECT * FROM legend_item ',

        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
//retrive legend category from mysql
app.get("/getCategory", (req, res) => {

    db.query(
        'SELECT * FROM legend_category ',

        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
//retrive project from mysql to Search field 
app.get("/searchProject", (req, res) => {

    db.query(
        'SELECT id, title, client FROM project ',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
app.listen(3001, () => {
    console.log("Listening on port 3001")
});