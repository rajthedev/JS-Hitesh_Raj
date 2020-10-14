var name = "hitesh";

console.log("line number 3", name);

function sayName(){
    var name = "raj kumar";
    console.log("line Number 7", name);
    sayNameTwo();

    function sayNameTwo(){
        console.log("line number 10", name);
    }
}
sayName();
