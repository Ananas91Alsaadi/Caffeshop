var currentCustomerOrder = [];
var ordersToBeServed = [];
var servedOrders = [];
var orders = ["Espresso", "Caffe latte", "Cappuccino"];
var prices = [27, 40, 35];
var total=0;
var dailysale=0;
var c=0;

function LoadPage() {
for (var s=0; s<orders.length;s++) {
	var newbuttonel = document.createElement("button");
	newbuttonel.innerHTML = orders[s] + " | " + prices[s] + " kr";
	newbuttonel.setAttribute('onclick', 'addorder(' + s + ')');
	document.querySelector("#cups").appendChild(newbuttonel);
} 
}


function AddCup(){
	var ordera = prompt("Cup name");
	orders.push(ordera);
	var pricea = prompt("Cup name");
	pricea=Number(pricea);
	prices.push(pricea);
	document.querySelector("#cups").innerHTML="";
	LoadPage();

}



function addorder(cup) {
	var price = prices[cup];
	total += price;
	currentCustomerOrder.push(orders[cup]);
	var node = document.createElement("LI");	
	var textnode = document.createTextNode(orders[cup]);
	node.appendChild(textnode);
	document.getElementById("order").appendChild(node);
	document.getElementById("total").innerHTML = "Total: " + total + " kr";
	
}

function dele(){
	document.getElementById("order").innerHTML = "";
	currentCustomerOrder = [];
	document.getElementById("total").innerHTML = "";
	total =0;

}

function finnishandmove() {
	
	for (var i=0;i<currentCustomerOrder.length;i++) {
		ordersToBeServed.push(currentCustomerOrder[i]);
		var node = document.createElement("LI");
		var textnode = document.createTextNode(currentCustomerOrder[i]);
		node.appendChild(textnode);
		document.getElementById("comeorder").appendChild(node);
	}
	
	dailysale += total;
	document.getElementById("totalsale").innerHTML = "Total Sales for today: " + dailysale + "kr";
	dele();
	
}

function nextdrink() {
	var nowdrink = document.getElementById("noworder");
	var firstdrink = document.getElementById("comeorder");
	nowdrink.innerHTML = firstdrink.childNodes[1].innerHTML;
	servedOrders.push(ordersToBeServed[0]);
	
	var cou = 0;
	var totalCups = [];

	for (var o=0;o<orders.length;o++) {
	for (var c=0;c<servedOrders.length;c++) {
		if (servedOrders[c] == orders[o]) {cou++;}
	}	
		totalCups.push({amount : cou, name : orders[o]});
		cou = 0;
	}
	var best = totalCups.sort(function compareNumbers(a, b) {return b.amount - a.amount;}); //How!!!!!!!!!!!!!!!!!!
	document.getElementById("todaysales").innerHTML = "";

	for (var i=0;i<best.length;i++) {
		var node = document.createElement("li");
		var textnode = document.createTextNode(best[i].name+ " : " + best[i].amount);
		node.appendChild(textnode);
		document.getElementById("todaysales").appendChild(node);
	}
	
		document.getElementById("best").innerHTML = best[0].name+ " : " + best[0].amount;
			
		ordersToBeServed.shift();
		firstdrink.removeChild(firstdrink.childNodes[1]);
}















