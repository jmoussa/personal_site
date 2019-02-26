//Install express server
const express = require('express');
const path = require('path');
const forceSSL = require('force-ssl-heroku');
const app = express();

var http = require("http");
setInterval(function() {
    http.get("http://joseph-moussa.herokuapp.com");
}, (300000*12)); // every 1 hour 

app.use(forceSSL);
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/professionalSite'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, '/dist/professionalSite/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
