window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

function totalPrice() {
	var total = 0;
	var pizzaSize = document.getElementById('pizzaSize').value;
	var pizzaDough = document.getElementById('pizzaDough').value;
	var toppings = document.getElementsByName('toppings');

	switch(pizzaSize) {
		case 'small':
			total += 5;
			break;
		case 'large':
			total += 15;
			break;
		case 'massive':
			total += 20;
			break;
		default:
			total += 10;
	}

	switch(pizzaDough) {
		case 'italian':
			total += 1;
			break;
		case 'wholemeal':
			total += 5;
			break;
		case 'crisp':
			total += 1;
			break;
		case 'cheese':
			total += 3;
			break;
		default:
			total += 3;
	}


	for( var i = 0; toppings[i]; ++i ){

		if(toppings[i].checked){
			total += parseInt(toppings[i].value);
			break;
		}
	}

	console.log(total);

}
