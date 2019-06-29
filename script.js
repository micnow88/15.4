'use strict';

//Create klass
function Phone(brand, price, color, insurance) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.insurance = insurance;
};

//Declares the method using the prototype
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

Phone.prototype.phoneInsurance = function() {
	console.log("The price of " + this.brand + " with insurance is " + (this.price + this.insurance) + "PLN.");
};




//Create new object
var iPhone6 = new Phone("Apple", 2550, "silver", 255);
var sGalaxyS7 = new Phone("Samsung", 2300, "black", 230);
var hP30pro = new Phone("Huaweii", 2000, "blue", 200);


sGalaxyS7.printInfo();
hP30pro.phoneInsurance();