const express  = require("express");
const mongoose  = require("mongoose");
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://myuser:myuser@myfirstcluster-z52zh.mongodb.net/mydb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(3333);