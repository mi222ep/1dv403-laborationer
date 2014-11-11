"use strict";

var makePerson = function(persArr){

 var result = {};

var name = persArr.map(function(name) {return name + ', ';});
//Map "name:" ', ' "name" ', ';
//Map "age:"

//minAge - nummer innehållande den ålder i de inskickade objekten som är lägst.
//Sortera åldern, minAge = personArr[0] 
//maxAge -nummer innehållande den ålder i de inskickade objekten som är högst.

//avarageAge - nummer innehållande medelåldern av de inskickade objektens ålder.
//Reduce allihopa, dela på antal delar

//names - sträng innehållande samtliga personers namn separerade med ", " (komma och efterföljande mellanslag). Namnen sorteras i bokstavsordning.
	// Din kod här...

return result;
}

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);

