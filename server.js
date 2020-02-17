var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8083;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Burgerlord_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers WHERE eaten=0;", function(err, data) {
    if (err) throw err;
    var uneaten = data;
    connection.query("SELECT * FROM burgers WHERE eaten=1", function(err, data){
      if(err) throw err;
      var eaten=data;

    res.render("index", { burgers : uneaten, eatenburger:eaten});

    
      
    })


  
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // return res.send('You sent, ' + req.body.task);


connection.query("INSERT INTO burgers (top_bun, cheese, lettice, meat, bottom_bun, name, eaten) VALUES (?)", [req.body.top_bun, req.body.cheese, req.body.lettice, req.body.meat, req.body.bottom_bun, req.body.name, 0], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

app.put("/api/burgers/:id", function(req, res){
  connection.query("UPDATE movies SET eaten=1 where id =?"[req.params.id], function(err, result){
      if(err) {
          return res.status(500).end();
      }
  })
})
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
