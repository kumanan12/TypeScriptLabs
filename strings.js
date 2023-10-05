var person = {
    name: "Kumanan Murugesan",
    city: "Morrisville",
    state: "NC",
    zip: 27560
};
var s = "\n    ".concat(person.name, ",\n    ").concat(person.city, ", ").concat(person.state, ",\n    ").concat(person.zip);
var indexOfName = s.indexOf(person.name);
var startsWithName = s.startsWith(person.name);
var endsWith = s.endsWith(person.zip);
