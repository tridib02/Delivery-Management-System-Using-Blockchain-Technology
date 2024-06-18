const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");

// const {Web3} = require("web3");
const abivalue = require('./abi/abi.js')

// const web3 = new Web3('https://polygon-amoy.g.alchemy.com/v2/G_CAhn1Z9XnfCkl9-QdLQMk6TE5GqpJ8');

const {ethers} = require('ethers');



const app = express();

const abi = abivalue;
const contractAddress = '0x61da02efc5dDe395181caE61d67e495eEb210Ebd';
const add_my = '0x55184A2Ce702AEE30E39D7Ecc01135a44ceB306F';
// Private key (should be kept secure)
const privateKey = "d1d5ab51b4a31ce1a945e42c66e5c5d916fbff6659c5b5b81fbf066042e6ec51";

//ethers js //not working
// const provider = new ethers.providers.JsonRpcProvider('https://polygon-amoy.g.alchemy.com/v2/G_CAhn1Z9XnfCkl9-QdLQMk6TE5GqpJ8');
// const wallet = new ethers.Wallet(privateKey, provider);
// // Connect to the contract using the wallet
// const contract = new ethers.Contract(contractAddress, abi, wallet);

//web3 js not working
// // Create wallet from private key
// const account = web3.eth.accounts.privateKeyToAccount(privateKey);
// const contract = new web3.eth.Contract(abi, contractAddress);

// Passport Config
require("./config/passport")(passport);

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {  })
  .then(() => console.log(".."))
  .catch((err) => console.log(err));

// EJS
app.use(expressLayouts);
app.use(express.static("public"));
app.set("view engine", "ejs");

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.post('/registerUser', async (req, res) => {
    try {
        const { name, email, password, address, usertype, price } = req.body;
        const tx = await contract.registerUser("debayan", "pradhandebayan@gmail.com", "12345678", add_my, 0, 100);
        console.log("Transaction hash:", tx.hash);
        await tx.wait(); 
        console.log("Transaction confirmed");
    } catch (error) {
        res.send('Error interacting with contract: ' + error.message);
    }
});
// Routes
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));
app.use("/order", require("./routes/order.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`localhost ${PORT}`));
