let person = {
    name: "Kumanan Murugesan",
    city: "Morrisville",
    state: "NC",
    zip: 27560
}

let s = `
    ${person.name},
    ${person.city}, ${person.state},
    ${person.zip}`;

let indexOfName = s.indexOf(person.name);
let startsWithName = s.startsWith(person.name);
let endsWith = s.endsWith(person.zip);