# Pizza Parlor Project
#### By Grant Abel

### Brief _A web app for a pizza shop that allows users to create and order their own custom made pizzas._

### Technologies Used
* _HTML_
* _CSS_
* _JavaScript_

### Description _This webpage is the online storefront for a pizza shop. Customers are able to select and customize pizza orders; multiple sizes and toppings are available along with sides that can be added on to the order. The total for the order will be shown prior to finalizing the order._

### Setup/Installation Requirements _You are able to access coding for this app via my GitHub repository, found at https://github.com/gtayyy/Wk4-Independent.git. You will want to create a local repository, fork to your personal GitHub account, and pull to your local repo._

### Known Bugs _No known bugs._

## Development Testing 

### Describe: Pizza ()

Test1: It should return a pizza object with three properties for size, crust and toppings
Code: const Pizza = new Pizza("medium", "thin" [x, y, z]);
Result: Pizza {  size: "medium", crust: "thin", toppings: [x, y, z] }

### Describe: pizza prototype method for calculating cost

Test2: It should verify the pizza size selected and return the updated cost to a new variable, totalPrice
Code: Pizza.totalPrice();
Result: $16.99

Test3: It should verify the crust type selected and return the updated cost to the variable totalPrice
Code: Pizza.totalPrice();
Result: $17.99

Test4: It should verify the toppings selected and return the total to a new variable, toppingsPrice
Code: toppingsPrice = this.toppings.length * 0.25
Result: $1.00

Test5: It should sum the order selections to give the order total to new variable, totalPrice
Code: Pizza.totalPrice();
Result: $19.99

### Describe: New order

Test6: it should clear the previous order
Code: placeAnotherOrder()
Result: pizzaForm.reset; 

### License _MIT_

### Copyright (c) _11.03.2023_ _Grant Abel_

### Last Revised: _November 13, 2023_ 