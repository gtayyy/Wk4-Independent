<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="CSS/styles.css" rel="stylesheet" type="text/css">
	<script src="SCRIPTS/scripts.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
	<title>Mama Mia's Pizzaria</title>
</head>

<body>

	<div class="TDC">
		<h1> Mama Mia's Pizzaria </h1> 
		<h2> You'll Love Our Pie, That Ain't No Lie! </h2>
	</div>

  <div class="form-group col-sm-8">
    <label for="dur">SELECT YOUR SIZE</label>
    <select id="dur" class="form-select">
      <option value="12" selected>Small - $12.99</option>
      <option value="24">Medium - $14.99</option>
      <option value="36">Large - $16.99</option>
      <option value="48">Extra Large - $18.99</option>
    </select>
  </div>

  <div class="form-group col-sm-8">
    <label for="myMultiselect">Cheese & Sauce Options</label>
    <div id="myMultiselect" class="multiselect">
      <div id="mySelectLabel" class="selectBox" onclick="toggleCheckboxArea()">
        <select class="form-select">
          <option>somevalue</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div id="mySelectOptions">
        <label for="extraCheese"><input type="checkbox" id="extraCheese" onchange="checkboxStatusChange()" value="Extra Cheese"/> Cheese it up bro! - $1.00 extra </label>
        <label for="lightCheese"><input type="checkbox" id="lightCheese" onchange="checkboxStatusChange()" value="Light Cheese"/> I'm lactos sensitive dude... </label>
        <label for="extraSauce"><input type="checkbox" id="extraSauce" onchange="checkboxStatusChange()" value="Extra Sauce"/> Get lost in the sauce! - $0.75 extra</label>
        <label for="lightSauce"><input type="checkbox" id="lightSauce" onchange="checkboxStatusChange()" value="Light Sauce"/> No one likes a slip'n'slide 'za... </label>
      </div>
    </div>
  </div>

	<div class="form-group col-sm-8">
    <label for="dur">What's Your Favorite Crusty Crust?</label>
    <select id="dur" class="form-select">
      <option value="tossed" selected>Toss it up! (tossed)</option>
      <option value="pan">Peter Pan is my hero (pan)</option>
      <option value="deepDish">Deep as the ocean blue (deep dish - $1.00 extra)</option>
      <option value="this">I just joined Weight Watchers (thin)</option>
    </select>
  </div>

	<div class="form-group col-sm-8">
    <label for="myMultiselect">We got more meat than your local 24 Hour Fitness!</label>
    <div id="myMultiselect" class="multiselect">
      <div id="mySelectLabel" class="selectBox" onclick="toggleCheckboxArea()">
        <select class="form-select">
          <option>Pick Your Poison</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div id="mySelectOptions">
        <label for="pepperoni"><input type="checkbox" id="pepperoni" onchange="checkboxStatusChange()" value="pepperoni"/> Pepperoni </label>
        <label for="canadianBacon"><input type="checkbox" id="canadianBacon" onchange="checkboxStatusChange()" value="canadianBacon"/> Canadian Bacon </label>
        <label for="sausage"><input type="checkbox" id="sausage" onchange="checkboxStatusChange()" value="sausage"/> Sausage </label>
        <label for="chicken"><input type="checkbox" id="chicken" onchange="checkboxStatusChange()" value="chicken"/> Chicken </label>
				<label for="ham"><input type="checkbox" id="ham" onchange="checkboxStatusChange()" value="ham"/> Ham </label>
				<label for="salami"><input type="checkbox" id="salami" onchange="checkboxStatusChange()" value="salami"/> Salami </label>
				<label for="anchovie"><input type="checkbox" id="anchovie" onchange="checkboxStatusChange()" value="lightSauce"/> Anchovies </label>
      </div>
    </div>
  </div>

	<div class="form-group col-sm-8">
    <label for="myMultiselect">Veggies Fresher than Febreeze!</label>
    <div id="myMultiselect" class="multiselect">
      <div id="mySelectLabel" class="selectBox" onclick="toggleCheckboxArea()">
        <select class="form-select">
          <option>Pineapple is a veggie right?</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div id="mySelectOptions">
        <label for="pepperoni"><input type="checkbox" id="pepperoni" onchange="checkboxStatusChange()" value="pepperoni"/> Pepperoni </label>
        <label for="canadianBacon"><input type="checkbox" id="canadianBacon" onchange="checkboxStatusChange()" value="canadianBacon"/> Canadian Bacon </label>
        <label for="sausage"><input type="checkbox" id="sausage" onchange="checkboxStatusChange()" value="sausage"/> Sausage </label>
        <label for="chicken"><input type="checkbox" id="chicken" onchange="checkboxStatusChange()" value="chicken"/> Chicken </label>
				<label for="ham"><input type="checkbox" id="ham" onchange="checkboxStatusChange()" value="ham"/> Ham </label>
				<label for="salami"><input type="checkbox" id="salami" onchange="checkboxStatusChange()" value="salami"/> Salami </label>
				<label for="anchovie"><input type="checkbox" id="anchovie" onchange="checkboxStatusChange()" value="lightSauce"/> Anchovies </label>
      </div>
    </div>
  </div>
</body>

</html>