let total=0;
let total_1=0;
let count_1=0;
let price_1 = 70;
function myfunction_1() {
	if (count_1==0) {
		document.getElementById("cart_1").innerHTML = "REMOVE FROM CART";
		document.getElementById("add_1").innerHTML = "Added";
		document.getElementById("remove_1").innerHTML = "&#128465;";
		count_1=1;
		total=total+price_1;
	} else {
		document.getElementById("cart_1").innerHTML = "&#128722; ADD TO CART";
		document.getElementById("add_1").innerHTML = "Not Added";
		document.getElementById("remove_1").innerHTML = "+";
		count_1=0;
		total=total-price_1;
	}
	document.getElementById("total_price").innerHTML = "$" + total;
	document.getElementById("price").value="$"+total;
}

let count_2=0;
let price_2 = 30;
function myfunction_2() {
	if (count_2==0) {
		document.getElementById("cart_2").innerHTML = "REMOVE FROM CART";
		document.getElementById("add_2").innerHTML = "Added";
		document.getElementById("remove_2").innerHTML = "&#128465;";
		count_2=1;
		total+=price_2;
	} else {
		document.getElementById("cart_2").innerHTML = "&#128722; ADD TO CART";
		document.getElementById("add_2").innerHTML = "Not Added";
		document.getElementById("remove_2").innerHTML = "+";
		count_2=0;
		total-=price_2;
	}
	document.getElementById("total_price").innerHTML = "$" + total;
	document.getElementById("price").value="$"+total;
}

let count_3=0;
let price_3 = 70;
function myfunction_3() {
	if (count_3==0) {
		document.getElementById("cart_3").innerHTML = "REMOVE FROM CART";
		document.getElementById("add_3").innerHTML = "Added";
		document.getElementById("remove_3").innerHTML = "&#128465;";
		count_3=1;
		total+=price_3;
	} else {
		document.getElementById("cart_3").innerHTML = "&#128722; ADD TO CART";
		document.getElementById("add_3").innerHTML = "Not Added";
		document.getElementById("remove_3").innerHTML = "+";
		count_3=0;
		total-=price_3;
	}
	document.getElementById("total_price").innerHTML = "$" + total;
	document.getElementById("price").value="$"+total;
}

let count_4=0;
let price_4 = 40;
function myfunction_4() {
	if (count_4==0) {
		document.getElementById("cart_4").innerHTML = "REMOVE FROM CART";
		document.getElementById("add_4").innerHTML = "Added";
		document.getElementById("remove_4").innerHTML = "&#128465;";
		count_4=1;
		total+=price_4;
	} else {
		document.getElementById("cart_4").innerHTML = "&#128722; ADD TO CART";
		document.getElementById("add_4").innerHTML = "Not Added";
		document.getElementById("remove_4").innerHTML = "+";
		count_4=0;
		total-=price_4;
	}
	document.getElementById("total_price").innerHTML = "$" + total;
	document.getElementById("price").value="$"+total;
}


let cart_box = document.querySelector('.cart_box');
let billing = document.querySelector('.billing');

function carter(){
	cart_box.classList.add("active");
}

function closer() {
	cart_box.classList.remove("active");
}

function cartopen_1() {
	cart.classList.add("active");
	cart_box.classList.remove("active");
	billing.classList.add("active");
	total_1+=price_1;
	document.getElementById("price").value="$"+total_1;
}

function cartopen_2() {
	cart.classList.add("active");
	cart_box.classList.remove("active");
	billing.classList.add("active");
	total_1+=price_2;
	document.getElementById("price").value="$"+total_1;

	
}

function cartopen_3() {
	cart.classList.add("active");
	cart_box.classList.remove("active");
	billing.classList.add("active");
	total_1+=price_3;
	document.getElementById("price").value="$"+total_1;

}

function cartopen_4() {
	cart.classList.add("active");
	cart_box.classList.remove("active");
	billing.classList.add("active");
	total_1+=price_4;
	document.getElementById("price").value="$"+total_1;

}

function cartclose() {
	cart.classList.remove("active");
	billing.classList.remove("active");	
	total_1=0;
	document.getElementById("price").value="$"+total_1;
}

function cartopen_5() {
	if (total == 0 ) {
		alert("YOUR CART IS EMPTY");
		cart_box.classList.remove("active");
	} else {
	cart.classList.add("active");
	cart_box.classList.remove("active");
	billing.classList.add("active");
	}
	document.getElementById("price").value="$"+total;
}

function pre_fill(){
 let x = document.forms["form"]["name"].value;
 let y = document.forms["form"]["email_1"].value;
 if (x != "" || y != "") {
 document.forms["form_1"]["firstname"].value = x;
 document.forms["form_1"]["email_2"].value = y;
 document.getElementById("submit_button").innerHTML="Submitted"

 }
}

function check() {
	if( document.forms["form_1"]["firstname"].value != "" && document.forms["form_1"]["email_2"].value != "" && document.forms["form_1"]["cname"].value != "" && document.forms["form_1"]["ccnum"].value != "" && document.forms["form_1"]["expmonth"].value != "" && document.forms["form_1"]["cvv"].value != ""){
		alert("Purchase Successfully Completed");
	}
 
}