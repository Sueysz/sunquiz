const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeTest'

});
connection.connect(function(err){
    if(err) {
        console.log(err.code);
        console.log(err.fatal);
    }
})

const query =" SELECT * FROM UserInfo";

connection.query(query, (err, rows, fields) => {
    if(err){
        console.log("An error occured with the query ");
        return;
    }

    console.log("query succesfully executed" , rows);
})

connection.end(function(){
    console.log("connection closed");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/quiz', (req, res) => {
    res.send('mon quiz')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});