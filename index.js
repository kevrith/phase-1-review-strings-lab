// Write your code in this file!
const currentUser = "KELVIN";
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const firstInitial = currentUser.slice(0, 1);
const shortGreeting = "Welcome, " + firstInitial + "!"
console.log(currentUser);
console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(shortGreeting);