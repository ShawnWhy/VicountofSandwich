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

// Handlebars.registerHelper('if_eq', function(a, b, opts) {
//   if (a == b) {
//       return opts.fn(this);
//   } else {
//       return opts.inverse(this);
//   }
// });

if(process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
}
else{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Burgerlord_db"
});};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


app.get("/", function(req, res) {
  connection.query("SELECT id, top_bun, IF(lettice,true,false)lettice, cheese, meat,bottom_bun, name, eaten FROM burgers WHERE eaten=0;", function(err, data) {
    if (err) throw err;
    var uneaten = data;
    connection.query("SELECT * FROM burgers WHERE eaten=1", function(err, data){
      if(err) throw err;
      var eaten=data;

    res.render("index", { burgers : uneaten, eatenBurger:eaten});

    // IF(completed, 'true', 'false') completed
      
    })


  
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.cheese);

  // // Test it
  // return res.json( req.body.cheese);


connection.query("INSERT INTO burgers (top_bun, cheese, lettice, meat, bottom_bun, name, eaten) VALUES (?,?,?,?,?,?,?)", [req.body.top_bun, req.body.cheese, req.body.lettice, req.body.meat, req.body.bottom_bun, req.body.name, req.body.eaten], function(err, result) {
    if (err) throw err;
res.json({ id: result.insertId });
console.log({ id: result.insertId });

// res.redirect("/");
  // });
});
})
app.put("/api/burgers/:id", function(req, res){
 var id = parseInt( req.params.id);
 console.log(id)
  connection.query("UPDATE burgers SET eaten=1 where id =?",[id], function(err, result){
      if(err) throw err;
      res.json({ id: result.insertId });

  })
})
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
