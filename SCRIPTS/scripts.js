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

	