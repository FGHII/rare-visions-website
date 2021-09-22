//ExpressJS setup
const express = require('express');
const app = express();

//EJS setup
const ejsLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
app.set('view engine', 'ejs');
// app.use(ejsLayouts);

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require static assets from public folder
app.use(express.static('public'));


app.get("/", function(req,res){
    res.render("index");
  });
  
// app.get("/:pageName", function(req,res){
//     res.render(req.params.pageName);
//     });

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log("Server started on port " + PORT);
});
