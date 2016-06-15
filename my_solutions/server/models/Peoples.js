'use strict';

// Creating module for Peoples
module.exports = () => {

  // List of names
  const name  = [ "Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];

  // List of surnames
  const surname   = [ "Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe" ];

  // Creting list names
  let list = [];

  // Creating 1- names
  for(let i = 0; i < 10; i++) {
    // Person data
    let person = {};

    person.id    = i;
    // Generate random
    person.name  = name[Math.floor((Math.random() * (name.length-1)) + 1)] + " " + name[Math.floor((Math.random() * (surname.length-1)) + 1)];
    person.disclosableInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
    list.push(person);
  }
  return list;
};
