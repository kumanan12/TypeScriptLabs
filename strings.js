var person = {
    name: "Kumanan Murugesan",
    city: "Morrisville",
    state: "NC",
    zip: 27560
};
var s = "\n    " + person.name + ",\n    " + person.city + ", " + person.state + ",\n    " + person.zip;
var indexOfName = s.indexOf(person.name);
var startsWithName = s.startsWith(person.name);
var endsWith = s.endsWith(person.zip);
