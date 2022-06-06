// Write your code in this file!
const currentUser = 'Grace Hopper';

// Alternate Solution
// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

// Solution
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.charAt(0, 1)}!`;