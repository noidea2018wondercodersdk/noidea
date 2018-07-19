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
		var small = 5.0;
		var medium = 10.0;
		var large = 15.0;
		var massive = 20.0;

		var deep = 3.0;
		var italian= 1.0;
		var wholemeal = 5.0;
		var crisp = 1.0;
		var cheese = 3.0;
		var addTop = 0;


		var pizzaSize = document.getElementById('pizzaSize').value;
		var pizzaDough = document.getElementById('pizzaDough').value;

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

		var totalTop = document.getElementByName("toppings")

		for each(var topping in toppings){
			total += topping;
		}

		console.log(total);




		// if(document.forms[0].pizzaSize[0].pizzaDough[0].checked == true) {
		// 	total += small;
		// }
		// else if(document.forms[0].pizzaSize[1].pizzaDough[1].checked == true){
		// 	total += medium;
		// }
		// else if(document.forms[0].pizzaSize[2].pizzaDough[2].checked == true){
		// 	total += large;
		// }
		//   else if(document.forms[0].pizzaSize[3].pizzaDough[3].checked == true){
		// 	total += massive;
		// }
		
	// 	for(var j=0; j<4; j++){
	// 		for(var i = 0; i < 4; i++){
	// 			if(document.forms[0].pizzaDough[j].toppingList[i].checked == true){
	// 				total += addTop;
	// 			}
	// 		}
	// 		document.f1.Total.value = total;

	// 		console.log(total);
}
