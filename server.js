var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/users.db')

var fs = require('fs');

eval(fs.readFileSync('public/cipher.js')+'');
eval(fs.readFileSync('public/decipher.js')+'');

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

//GET Methods

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/index', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/ciphers', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/ciphers.html'));
});

app.get('/register', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/register.html'));
});

app.get('/signin', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/signin.html'));
});

app.get('/courier', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/courier.html'));
});

app.get('/signedout', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/signedout.html'));
});

// POST Methods

app.post('/register', function(req, res)
{
	console.log('POST request received at /register');   
	var username = req.body.registerusername;
	var password = req.body.registerpassword;
	console.log('Registering...');
	console.log('Username: ' + username);
	console.log('Password: ' + password);
	var db = new sqlite3.Database('db/users.db')
	db.run('INSERT INTO users VALUES (?, ?)', [username, password], function(err)
	{
		db.close();
		if(err)
		{
			console.log("Error: " + err);
		}
		else
		{
			console.log('Registration Successful!');
			res.redirect('signin.html');
		}
	});
});

app.post('/auth', function(req, res)
{
	console.log('POST request received at /auth');
	var username = req.body.signinusername;
	var password = req.body.signinpassword;
	if (username && password)
	{
		console.log('Checking...');
		console.log('Username: ' + username);
		console.log('Password: ' + password);  
		var db = new sqlite3.Database('db/users.db')
        db.all('SELECT * FROM users WHERE (username==?) AND (password==?)', [username, password], function(err, rows)
		{
			db.close();
            if(err)
            {
                console.log('Error: ' + err);
            }
            else
            {         
				rows.forEach(function (row){
				console.log('Login Successful');
				res.redirect('/courier');
				});
            };
        });
	}
});

app.listen(3000);
console.log('Server is running on: 3000');