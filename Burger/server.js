var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use("/static", express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Listening on %s", PORT);
});