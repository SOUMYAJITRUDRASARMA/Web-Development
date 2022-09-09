// DEPENDENCIES
const express = require('express')
const session = require('express-session')
const mysql = require('mysql');
const http = require('http')
const path = require('path')
const routes = require('./routes')
const user = require('./routes/user')
const bodyParser = require('body-parser');
const { connect } = require('http2');

// APP SETUP
const app = express()
const connection = mysql.createConnection({
    host: 'localhost',
    database: '1_basic_login_project'
})
connection.connect()
global.db = connection

// ENVIRONMENT SETUP
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// PAGES
app.get('/', routes.index) //call for main index page
app.get('/signup', user.signup) //call for signup page
app.post('/signup', user.signup) //call for signup post 
app.get('/login', routes.index) //call for login page
app.post('/login', user.login) //call for login post
app.get('/home/dashboard', user.dashboard) //call for dashboard page after login
app.get('/home/logout', user.logout) //call for logout
app.get('/home/profile',user.profile) //to render users profile

app.listen(80, () => {
    console.log('The app started successfully on port 80')
})