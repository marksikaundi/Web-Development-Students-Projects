var data = 0;
var saved;
index = 0;


function increment() {
	data = data + 1;
	document.getElementById("counting").innerHTML = data;
}

function decrement() {
	if (data != 0) {//Only Decrement if Data is greater than 0
		data = data - 1;
		document.getElementById("counting").innerHTML = data;
	}

}

function Save() {
	index++
	if (index == 1) {
		saved = data;
		data = 0;
		document.getElementById('Counted').innerHTML = saved;
		document.getElementById('counting').innerHTML = data;
	}
	else{
		saved = data;
		data = 0;
		document.getElementById('Counted').innerHTML += '-'+saved;
		document.getElementById('counting').innerHTML = data;
	}

}
function del(){
	saved =0;
	data = 0;
	document.getElementById('Counted').innerHTML = saved;
}
