// W02-Task - Profile Home Page 

// Step 1 - Setup type tasks

// Step 2 - Variables 
let fullName = "Dalia Rojas";
let currentYear = 2024;
let profilePicture = "images/profilepic.jpg";

// Step 3 - Element Variables 
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

// Step 4 - Adding Content 
nameElement.innerHTML = "<strong>${fullName}</strong>";
yearElement.textContent = "${currentYear}";
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile image of ${fullName}");

// Step 5 - Array 
let favFood = ["Peruvian Food","Italian Food","Tacos","Chinese Food"];
foodElement.innerHTML += "<br>${favFood}";
let newFood = "Cooked Sushi";
favFood.push(newFood);
foodElement.innerHTML += "<br>${favFood}";
favFood.shift();
foodElement.innerHTML += "<br>${favFood}";
favFood.pop();
foodElement.innerHTML += "<br>${favFood}";






