//a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// Message would be displayed

//b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//Message wouldn't be displayed

//c
var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}
//(condition 1 is true) and (condition 4 is true)
//These msg would be displayed

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}
//Message would be displayed

//e
if (true){
    alert("True");
   }
   if (false){
    alert("False");
   }
// Message would be displayed

//f
 if("car" < "cat"){
    alert("car is smaller than cat");
 }
 // Message would be displayed
