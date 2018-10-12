var A = 5;
var B = 4;
var C = 3;
var D = 2;
var E = 1;
var F = 0;
var a = 5;
var b = 4;
var c = 3;
var d = 2;
var e = 1;
var f = 0;
//NeroCodes G.P Calculator
//functions to calculate the G.P for each row depending on how many courses selected

function onecal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	var first = oneGradeTotal;
	s = eval(oneUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function twocal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function threecal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal +threeGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function fourcal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	fourGrade = document.getElementById("fourGrade");
	fourGradeVal = fourGrade.value;
	fourUnit = document.getElementById("fourUnit");
	fourUnitVal = fourUnit.value;
	var fourGradeStr = fourGradeVal + "*" + fourUnitVal;
	var fourGradeTotal = eval(fourGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal + threeGradeTotal + fourGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5") + eval(fourUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function fivecal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	fourGrade = document.getElementById("fourGrade");
	fourGradeVal = fourGrade.value;
	fourUnit = document.getElementById("fourUnit");
	fourUnitVal = fourUnit.value;
	var fourGradeStr = fourGradeVal + "*" + fourUnitVal;
	var fourGradeTotal = eval(fourGradeStr) ;
	fiveGrade = document.getElementById("fiveGrade");
	fiveGradeVal = fiveGrade.value;
	fiveUnit = document.getElementById("fiveUnit");
	fiveUnitVal = fiveUnit.value;
	var fiveGradeStr = fiveGradeVal + "*" + fiveUnitVal;
	var fiveGradeTotal = eval(fiveGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal + threeGradeTotal + fourGradeTotal + fiveGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5")
	+ eval(fourUnitVal+"*"+"5") + eval(fiveUnitVal+"*"+"5");;
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function sixcal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	fourGrade = document.getElementById("fourGrade");
	fourGradeVal = fourGrade.value;
	fourUnit = document.getElementById("fourUnit");
	fourUnitVal = fourUnit.value;
	var fourGradeStr = fourGradeVal + "*" + fourUnitVal;
	var fourGradeTotal = eval(fourGradeStr) ;
	fiveGrade = document.getElementById("fiveGrade");
	fiveGradeVal = fiveGrade.value;
	fiveUnit = document.getElementById("fiveUnit");
	fiveUnitVal = fiveUnit.value;
	var fiveGradeStr = fiveGradeVal + "*" + fiveUnitVal;
	var fiveGradeTotal = eval(fiveGradeStr) ;
	sixGrade = document.getElementById("sixGrade");
	sixGradeVal = sixGrade.value;
	sixUnit = document.getElementById("sixUnit");
	sixUnitVal = sixUnit.value;
	var sixGradeStr = sixGradeVal + "*" + sixUnitVal;
	var sixGradeTotal = eval(sixGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal + threeGradeTotal + fourGradeTotal + fiveGradeTotal 
	+ sixGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5")
	+ eval(fourUnitVal+"*"+"5") + eval(fiveUnitVal+"*"+"5") + eval(sixUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function sixcal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	fourGrade = document.getElementById("fourGrade");
	fourGradeVal = fourGrade.value;
	fourUnit = document.getElementById("fourUnit");
	fourUnitVal = fourUnit.value;
	var fourGradeStr = fourGradeVal + "*" + fourUnitVal;
	var fourGradeTotal = eval(fourGradeStr) ;
	fiveGrade = document.getElementById("fiveGrade");
	fiveGradeVal = fiveGrade.value;
	fiveUnit = document.getElementById("fiveUnit");
	fiveUnitVal = fiveUnit.value;
	var fiveGradeStr = fiveGradeVal + "*" + fiveUnitVal;
	var fiveGradeTotal = eval(fiveGradeStr) ;
	sixGrade = document.getElementById("sixGrade");
	sixGradeVal = sixGrade.value;
	sixUnit = document.getElementById("sixUnit");
	sixUnitVal = sixUnit.value;
	var sixGradeStr = sixGradeVal + "*" + sixUnitVal;
	var sixGradeTotal = eval(sixGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal + threeGradeTotal + fourGradeTotal + fiveGradeTotal 
	+ sixGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5")
	+ eval(fourUnitVal+"*"+"5") + eval(fiveUnitVal+"*"+"5") + eval(sixUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function sevencal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	fourGrade = document.getElementById("fourGrade");
	fourGradeVal = fourGrade.value;
	fourUnit = document.getElementById("fourUnit");
	fourUnitVal = fourUnit.value;
	var fourGradeStr = fourGradeVal + "*" + fourUnitVal;
	var fourGradeTotal = eval(fourGradeStr) ;
	fiveGrade = document.getElementById("fiveGrade");
	fiveGradeVal = fiveGrade.value;
	fiveUnit = document.getElementById("fiveUnit");
	fiveUnitVal = fiveUnit.value;
	var fiveGradeStr = fiveGradeVal + "*" + fiveUnitVal;
	var fiveGradeTotal = eval(fiveGradeStr) ;
	sixGrade = document.getElementById("sixGrade");
	sixGradeVal = sixGrade.value;
	sixUnit = document.getElementById("sixUnit");
	sixUnitVal = sixUnit.value;
	var sixGradeStr = sixGradeVal + "*" + sixUnitVal;
	var sixGradeTotal = eval(sixGradeStr) ;
	sevenGrade = document.getElementById("sevenGrade");
	sevenGradeVal = sevenGrade.value;
	sevenUnit = document.getElementById("sevenUnit");
	sevenUnitVal = sevenUnit.value;
	var sevenGradeStr = sevenGradeVal + "*" + sevenUnitVal;
	var sevenGradeTotal = eval(sevenGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal + threeGradeTotal + fourGradeTotal + fiveGradeTotal 
	+ sixGradeTotal + sevenGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5")
	+ eval(fourUnitVal+"*"+"5") + eval(fiveUnitVal+"*"+"5") + eval(sixUnitVal+"*"+"5")
	 + eval(sevenUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
//NeroCodes G.P Calculator
function eightcal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	fourGrade = document.getElementById("fourGrade");
	fourGradeVal = fourGrade.value;
	fourUnit = document.getElementById("fourUnit");
	fourUnitVal = fourUnit.value;
	var fourGradeStr = fourGradeVal + "*" + fourUnitVal;
	var fourGradeTotal = eval(fourGradeStr) ;
	fiveGrade = document.getElementById("fiveGrade");
	fiveGradeVal = fiveGrade.value;
	fiveUnit = document.getElementById("fiveUnit");
	fiveUnitVal = fiveUnit.value;
	var fiveGradeStr = fiveGradeVal + "*" + fiveUnitVal;
	var fiveGradeTotal = eval(fiveGradeStr) ;
	sixGrade = document.getElementById("sixGrade");
	sixGradeVal = sixGrade.value;
	sixUnit = document.getElementById("sixUnit");
	sixUnitVal = sixUnit.value;
	var sixGradeStr = sixGradeVal + "*" + sixUnitVal;
	var sixGradeTotal = eval(sixGradeStr) ;
	sevenGrade = document.getElementById("sevenGrade");
	sevenGradeVal = sevenGrade.value;
	sevenUnit = document.getElementById("sevenUnit");
	sevenUnitVal = sevenUnit.value;
	var sevenGradeStr = sevenGradeVal + "*" + sevenUnitVal;
	var sevenGradeTotal = eval(sevenGradeStr) ;
	eightGrade = document.getElementById("eightGrade");
	eightGradeVal = eightGrade.value;
	eightUnit = document.getElementById("eightUnit");
	eightUnitVal = eightUnit.value;
	var eightGradeStr = eightGradeVal + "*" + eightUnitVal;
	var eightGradeTotal = eval(eightGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal + threeGradeTotal + fourGradeTotal + fiveGradeTotal 
	+ sixGradeTotal + sevenGradeTotal + eightGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5")
	+ eval(fourUnitVal+"*"+"5") + eval(fiveUnitVal+"*"+"5") + eval(sixUnitVal+"*"+"5")
	 + eval(sevenUnitVal+"*"+"5") + eval(eightUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function ninecal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	fourGrade = document.getElementById("fourGrade");
	fourGradeVal = fourGrade.value;
	fourUnit = document.getElementById("fourUnit");
	fourUnitVal = fourUnit.value;
	var fourGradeStr = fourGradeVal + "*" + fourUnitVal;
	var fourGradeTotal = eval(fourGradeStr) ;
	fiveGrade = document.getElementById("fiveGrade");
	fiveGradeVal = fiveGrade.value;
	fiveUnit = document.getElementById("fiveUnit");
	fiveUnitVal = fiveUnit.value;
	var fiveGradeStr = fiveGradeVal + "*" + fiveUnitVal;
	var fiveGradeTotal = eval(fiveGradeStr) ;
	sixGrade = document.getElementById("sixGrade");
	sixGradeVal = sixGrade.value;
	sixUnit = document.getElementById("sixUnit");
	sixUnitVal = sixUnit.value;
	var sixGradeStr = sixGradeVal + "*" + sixUnitVal;
	var sixGradeTotal = eval(sixGradeStr) ;
	sevenGrade = document.getElementById("sevenGrade");
	sevenGradeVal = sevenGrade.value;
	sevenUnit = document.getElementById("sevenUnit");
	sevenUnitVal = sevenUnit.value;
	var sevenGradeStr = sevenGradeVal + "*" + sevenUnitVal;
	var sevenGradeTotal = eval(sevenGradeStr) ;
	eightGrade = document.getElementById("eightGrade");
	eightGradeVal = eightGrade.value;
	eightUnit = document.getElementById("eightUnit");
	eightUnitVal = eightUnit.value;
	var eightGradeStr = eightGradeVal + "*" + eightUnitVal;
	var eightGradeTotal = eval(eightGradeStr) ;
	nineGrade = document.getElementById("nineGrade");
	nineGradeVal = nineGrade.value;
	nineUnit = document.getElementById("nineUnit");
	nineUnitVal = nineUnit.value;
	var nineGradeStr = nineGradeVal + "*" + nineUnitVal;
	var nineGradeTotal = eval(nineGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal + threeGradeTotal + fourGradeTotal + fiveGradeTotal 
	+ sixGradeTotal + sevenGradeTotal + eightGradeTotal + nineGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5")
	+ eval(fourUnitVal+"*"+"5") + eval(fiveUnitVal+"*"+"5") + eval(sixUnitVal+"*"+"5")
	 + eval(sevenUnitVal+"*"+"5") + eval(eightUnitVal+"*"+"5") + eval(nineUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
function tencal(){
	oneGrade = document.getElementById("oneGrade");
	oneGradeVal = oneGrade.value;
	oneUnit = document.getElementById("oneUnit");
	oneUnitVal = oneUnit.value;
	var oneGradeStr = oneGradeVal + "*" + oneUnitVal;
	var oneGradeTotal = eval(oneGradeStr) ;
	twoGrade = document.getElementById("twoGrade");
	twoGradeVal = twoGrade.value;
	twoUnit = document.getElementById("twoUnit");
	twoUnitVal = twoUnit.value;
	var twoGradeStr = twoGradeVal + "*" + twoUnitVal;
	var twoGradeTotal = eval(twoGradeStr) ;
	threeGrade = document.getElementById("threeGrade");
	threeGradeVal = threeGrade.value;
	threeUnit = document.getElementById("threeUnit");
	threeUnitVal = threeUnit.value;
	var threeGradeStr = threeGradeVal + "*" + threeUnitVal;
	var threeGradeTotal = eval(threeGradeStr) ;
	fourGrade = document.getElementById("fourGrade");
	fourGradeVal = fourGrade.value;
	fourUnit = document.getElementById("fourUnit");
	fourUnitVal = fourUnit.value;
	var fourGradeStr = fourGradeVal + "*" + fourUnitVal;
	var fourGradeTotal = eval(fourGradeStr) ;
	fiveGrade = document.getElementById("fiveGrade");
	fiveGradeVal = fiveGrade.value;
	fiveUnit = document.getElementById("fiveUnit");
	fiveUnitVal = fiveUnit.value;
	var fiveGradeStr = fiveGradeVal + "*" + fiveUnitVal;
	var fiveGradeTotal = eval(fiveGradeStr) ;
	sixGrade = document.getElementById("sixGrade");
	sixGradeVal = sixGrade.value;
	sixUnit = document.getElementById("sixUnit");
	sixUnitVal = sixUnit.value;
	var sixGradeStr = sixGradeVal + "*" + sixUnitVal;
	var sixGradeTotal = eval(sixGradeStr) ;
	sevenGrade = document.getElementById("sevenGrade");
	sevenGradeVal = sevenGrade.value;
	sevenUnit = document.getElementById("sevenUnit");
	sevenUnitVal = sevenUnit.value;
	var sevenGradeStr = sevenGradeVal + "*" + sevenUnitVal;
	var sevenGradeTotal = eval(sevenGradeStr) ;
	eightGrade = document.getElementById("eightGrade");
	eightGradeVal = eightGrade.value;
	eightUnit = document.getElementById("eightUnit");
	eightUnitVal = eightUnit.value;
	var eightGradeStr = eightGradeVal + "*" + eightUnitVal;
	var eightGradeTotal = eval(eightGradeStr) ;
	nineGrade = document.getElementById("nineGrade");
	nineGradeVal = nineGrade.value;
	nineUnit = document.getElementById("nineUnit");
	nineUnitVal = nineUnit.value;
	var nineGradeStr = nineGradeVal + "*" + nineUnitVal;
	var nineGradeTotal = eval(nineGradeStr) ;
	tenGrade = document.getElementById("tenGrade");
	tenGradeVal = tenGrade.value;
	tenUnit = document.getElementById("tenUnit");
	tenUnitVal = tenUnit.value;
	var tenGradeStr = tenGradeVal + "*" + tenUnitVal;
	var tenGradeTotal = eval(tenGradeStr) ;
	var first = oneGradeTotal + twoGradeTotal + threeGradeTotal + fourGradeTotal + fiveGradeTotal 
	+ sixGradeTotal + sevenGradeTotal + eightGradeTotal + nineGradeTotal + tenGradeTotal;
	s = eval(oneUnitVal+"*"+"5") + eval(twoUnitVal+"*"+"5") + eval(threeUnitVal+"*"+"5")
	+ eval(fourUnitVal+"*"+"5") + eval(fiveUnitVal+"*"+"5") + eval(sixUnitVal+"*"+"5")
	 + eval(sevenUnitVal+"*"+"5") + eval(eightUnitVal+"*"+"5") + eval(nineUnitVal+"*"+"5")
	 + eval(tenUnitVal+"*"+"5");
	var second = s;
	var gp = (first/second) * 5;
	document.getElementById("gp").innerHTML = gp.toFixed(2);
}
//NeroCodes G.P Calculator
//code to request the number of courses and transform the CSS
function courses(){
	var courses = prompt("How many courses?");
	if(courses == 1){
		var two = document.getElementById("two");
		var three = document.getElementById("three");
		var four = document.getElementById("four");
		var five = document.getElementById("five")
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
		var eight = document.getElementById("eight");
		var nine = document.getElementById("nine");
		var ten = document.getElementById("ten");
		two.className = "hide";
		three.className = "hide";
		four.className = "hide";
		five.className = "hide";
		six.className = "hide";
		seven.className = "hide";
		eight.className = "hide";
		nine.className = "hide";
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", onecal);
		
	}else if(courses == 2){
		var three = document.getElementById("three");
		var four = document.getElementById("four");
		var five = document.getElementById("five")
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
		var eight = document.getElementById("eight");
		var nine = document.getElementById("nine");
		var ten = document.getElementById("ten");
		three.className = "hide";
		four.className = "hide";
		five.className = "hide";
		six.className = "hide";
		seven.className = "hide";
		eight.className = "hide";
		nine.className = "hide";
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", twocal);
	}else if(courses == 3){
		var four = document.getElementById("four");
		var five = document.getElementById("five")
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
		var eight = document.getElementById("eight");
		var nine = document.getElementById("nine");
		var ten = document.getElementById("ten");
		four.className = "hide";
		five.className = "hide";
		six.className = "hide";
		seven.className = "hide";
		eight.className = "hide";
		nine.className = "hide";
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", threecal);
		
	}else if(courses == 4){
		var five = document.getElementById("five")
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
		var eight = document.getElementById("eight");
		var nine = document.getElementById("nine");
		var ten = document.getElementById("ten");
		five.className = "hide";
		six.className = "hide";
		seven.className = "hide";
		eight.className = "hide";
		nine.className = "hide";
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", fourcal);
		
	}else if(courses == 5){
		var six = document.getElementById("six");
		var seven = document.getElementById("seven");
		var eight = document.getElementById("eight");
		var nine = document.getElementById("nine");
		var ten = document.getElementById("ten");
		six.className = "hide";
		seven.className = "hide";
		eight.className = "hide";
		nine.className = "hide";
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", fivecal);
		
	} else if(courses == 6){
		var seven = document.getElementById("seven");
		var eight = document.getElementById("eight");
		var nine = document.getElementById("nine");
		var ten = document.getElementById("ten");
		seven.className = "hide";
		eight.className = "hide";
		nine.className = "hide";
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", sixcal);
		
	} else if(courses == 7){
		var eight = document.getElementById("eight");
		var nine = document.getElementById("nine");
		var ten = document.getElementById("ten");
		eight.className = "hide";
		nine.className = "hide";
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", sevencal);
		
	}else if(courses == 8){
		var nine = document.getElementById("nine");
		var ten = document.getElementById("ten");
		nine.className = "hide";
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", eightcal);
		
	}else if(courses == 9){
		var ten = document.getElementById("ten");
		ten.className = "hide";
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", ninecal);
		
	}else if(courses == 10){
		var ten = document.getElementById("ten");
		var btn = document.getElementById("btn"); 
		btn.addEventListener("click", tencal);
		
	}else {
		alert("Please enter a number from 1-10");
	}
}
