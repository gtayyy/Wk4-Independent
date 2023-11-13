function Pizza(size, crust, toppings) {
	this.size = size;
	this.crust = crust;
	this.toppings = toppings;
}

Pizza.prototype.calculateTotal = function () {
	let basePrice = 0;
	switch (this.size) {
			case 'small':
					basePrice = 12.99;
					break;
			case 'medium':
					basePrice = 13.99;
					break;
			case 'large':
					basePrice = 14.99;
					break;
			case 'extraLarge':
					basePrice = 15.99;
					break;
	}

	if (this.crust === 'deepDish' || this.crust === 'thin') {
			basePrice += 1.00;
	}

	const toppingsPrice = this.toppings.length * 0.25;
	const totalPrice = basePrice + toppingsPrice;

	return totalPrice.toFixed(2);
};

function submitOrder() {
	const size = document.getElementById('pizzaSize').value;
	const crust = document.getElementById('crustType').value;
	const toppingsCheckboxes = document.getElementsByName('topping');
	const toppings = [];
	for (let i = 0; i < toppingsCheckboxes.length; i++) {
			if (toppingsCheckboxes[i].checked) {
					toppings.push(toppingsCheckboxes[i].value);
			}
	}