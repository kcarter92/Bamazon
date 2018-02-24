var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  userSearch();
});

function userSearch() {
  connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;

  inquirer
    .prompt([
    {
      name: "item",
      type: "input",
      choices: function() {
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].item_id);
          }
          return choiceArray;
        },
      message: "Enter the item's ID you want to find."
    },
    {
      name: "quantity",
      type: "input",
      message: "How many of items would you like?"
    },
    ])
    .then(function(answer) {
  
  var chosenItem;
  for (var i = 0; i < results.length; i++) {
    if (results[i].item_id === answer.choice) {
      chosenItem = results[i];
    }
  }
   if (chosenItem < parseInt(answer.quantity)) {
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: answer.quantity
                },
                {
                  id: chosenItem.item_id
                }
              ],
            );
          }
          else {
            console.log("Insuffient quantity!!");
            userSearch();
          }
      });
  });
}