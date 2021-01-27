// Requiring necessary npm packages
const express = require('express')
const session = require('express-session')
const compression = require('compression')
 
const routes = require("./routes");
// Requiring passport as we've configured it
const passport = require('./config/passport')
require('dotenv').config()
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001
const db = require('./models')
 

// Creating express app and configuring middleware needed for authentication
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
 
 
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(routes);
// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    )
  })
})
