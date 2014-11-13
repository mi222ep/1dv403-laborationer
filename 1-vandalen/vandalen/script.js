"use strict";

var makePerson = function(persArr) {

    var result = {};

    var names = persArr.map(function(persArr) {
        return persArr.name;
    });
    names.sort(function(a,b){return a.localeCompare(b)});;
    result.names = names.join(', ');

    var ages = persArr.map(function(persArr) {
        return persArr.age;
    })
    ages.sort();

    result.minAge = ages[0];
    result.maxAge = ages[persArr.length - 1];
    result.averageAge = Math.round((ages.reduce(function(a, b) {
        return a + b;
    })) / (persArr.length));

    return result;
}

var data = [{
    name: "John Häggerud",
    age: 37
}, {
    name: "Johan Leitet",
    age: 36
}, {
    name: "Mats Loock",
    age: 46
}];

var result = makePerson(data);

console.log(result);
