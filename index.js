// Import the Express dependency
const express = require("express");

// Instantiate Express Object
const app = express();

// make public folder available
app.use(express.static(__dirname + "/public"));

// app.use(express.static("scenes"));

//Idiomatic expression in express to route and respond to a client request
app.get("/", (req, res) => {
  //get requests to the root ("/") will route here
  res.sendFile("index.html", { root: __dirname }); //server responds by sending the index.html file to the client's browser
  //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});

// app.get('/home', (req, res) => {
//   res.send("This is a get request")
// })

// app.post('/', (req, res) => {
//   res.send("This is a post request")
// })

// Save port number in variable
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
