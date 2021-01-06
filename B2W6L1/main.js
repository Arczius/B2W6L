var container = document.getElementById('container');
container.style.backgroundColor = "white";
document.body.style.backgroundColor = "gray";

//colors
//color 0 = green
//color 1 = red
//color 2 = blue
var color = ['green','red','blue'];

for(i=0; 1 < 3; i++){

	var amountPlus1 = i + 1;
	var button = document.createElement("button");
	var tekst = document.createTextNode("button " + amountPlus1);
	button.style.backgroundColor = color[i];
	button.id = "button_" + i;
	container.appendChild(button);
	button.onclick = function(){
		backgroundColor(this);
	};
}
