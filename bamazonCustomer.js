const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require('console.table');

//creates the connection object
var connection = mysql.createConnection({
  host: "localhost",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  user: "root",
  password: "root",
  database: "bamazon"
});
//displays connection id on success
connection.connect(function(err) {
  if (err) throw err;
  console.log("SQL Connection: " + connection.threadId);

//SQL display all tables in console cleanly
connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.table(res);
    displayShop();
  });
});

//SQL pull products into an array
var inventory = [];
function displayShop(){
connection.query('SELECT product_name FROM products', function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
    	inventory.push(res[i].product_name);
    }
    startPrompt()
  });
}


function startPrompt (){
	inquirer.prompt([
	  {
	  	type: "list",
	    name: "path",
	    message: "Pick an item?",
	    choices: inventory
	  },
	  {
	    type: "input",
	    name: "units",
	    message: "Quantity you would like to order?"
	  },
	]).then(function(action) {

		//Checking against their selection
		var query = "SELECT quantity FROM products WHERE ?";
     	 connection.query(query, { product_name: action.path}, function(err, res) {
   			if (err) throw err;
   			var inStore = res[0].quantity;

   			//Checks to see if there is enough in stock
    		if (action.units <= inStore){
    			var count = inStore-action.units;
    			purchase(action.path,count);
    			totalCost(action.path, action.units);
    		} else{
    			console.log('Insufficient quantity! There are ' + inStore + ' in stock currently');
    			connection.end();
    		}
  		});
	});
}


//Updates SQL inventory
function purchase(product, units){
var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: units
      },
      {
        product_name: product
      }
    ],
    function(err, res) {
      console.log(product + " inventory updated!\n");
    }
  );
}

//Adds up the total cost for the end user
function totalCost(product, unitsBought) {
	connection.query('SELECT price FROM products WHERE ?', { product_name: product}, function(err, res) {
    		var cost = unitsBought * res[0].price;
    		console.log('Thank you for selling your soul and shopping big business. Your total cost is: $' + cost.toFixed(2) +'\n');
    		displayShop();
    	});
}
