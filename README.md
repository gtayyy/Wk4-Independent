# Pizza Parlor Project
#### By Grant Abel

### Brief _A web app for a pizza shop that allows users to create and order their own custom made pizzas and sides/extras._

### Technologies Used
* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

### Description _This webpage is the online storefront for a pizza shop. Customers are able to select and customize pizza orders; multiple sizes and toppings are available along with sides that can be added on to the order. The total for the order will be shown prior to finalizing the order._

### Setup/Installation Requirements _You are able to access coding for this app via my GitHub repository, found at https://github.com/gtayyy/Wk4-Independent.git. You will want to create a local repository, fork to your personal GitHub account, and pull to your local repo._

### Known Bugs _!!!!!!!!!!!!!!!!!!!!!_

## Development Testing 
### Describe: Pizza ()

Test1: It should return a pizza object with two properties for size and toppings
Code: const myPizza = new Pizza("medium", [x, y, z]);
Result: Pizza {  size: "medium", toppings: [x, y, z] }

Test2: It should return a pizza object with properties for size, cheese/sauce options, crust type, meats, veggies/other
Code: const myPizza = new Pizza("medium", ["extra cheese", "light sauce"], "deep dish", ["chicken", "sausage"], "garlic");
Result:Pizza { size: "medium", cheese/sauce: ["extra cheese", "light sauce"], crust: "deep dish", meats: ["chicken, "sausage"], veggies/other: "garlic" }

### Describe: pizza prototype method for calculating cost

Test3: It should verify the pizza size selected and return the updated cost to a new variable, totalCost
Code: myPizza.totalCost();
Result: $16.99

Test4: It should verify the cheese/sauce options selected and return the updated cost to the variable totalCost
Code: myPizza.totalCost();
Result: $17.99

Test5: It should verify the crust type selected and return the updated cost to the variable totalCost
Code: myPizza.totalCost();
Result: $18.99

Test6: It should verify the meat toppings selected and return the updated cost to the variable totalCost
Code: myPizza.totalCost();
Result: $19.99

Test7: It should verify the veggie/other toppings selected and return the updated cost to the variable totalCost
Code: myPizza.totalCost();
Result: $20.99



### License _MIT_

### Copyright (c) _11.03.2023_ _Grant Abel_

### Last Revised: _November 9, 2023_