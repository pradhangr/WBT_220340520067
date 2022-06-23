
const express = require('express');
const app = express();
const cors = require('cors');

const mysql = require('mysql2');
const { response } = require('express');
app.use(cors());

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

const connection = mysql.createConnection({
    host: 'localhost',
	user: 'prashant',
	password: 'welcome@123',
	database: 'jalgaon',
	port: '3306',
});

app.get('/read', function(req,res){

   const{bookid} = req.body
   const statement = `select * from book where bookid = ?`

   connection.quary(statement,[bookid],(error ,res)=>{
        if (error){
            res.send(error)

		}
		else{
			res.send(res)
		}
   })
});

app.get('/update',function(req,res){
     const {bookid,price} = req.body
	 const statement = `update book set price=? where bookid = ?`

	 connection.quary(statement,[price,bookid] , (error ,res) =>{

		if (error){
            res.send(error)

		}
		else{
			res.send(res)
		}
	 })
	});

/*const bodyParser = require('body-parser');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;

app.post('/poc1', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});*/



//start the server 
app.listen(8081, function () {
    console.log("server listening at port 8081...");
});