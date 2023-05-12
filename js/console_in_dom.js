// Store a reference to the console.log function
var originalConsoleLog = console.log;

// Override the console.log function
console.log = function (message) {
  // Call the original console.log function
  originalConsoleLog.apply(console, arguments);

  // Select the DOM element to display the console log
  var consoleLogElement = document.getElementById("consoleLog");

  // Create a new paragraph element
  var logMessageElement = document.createElement("p");

  // Set the text content to the console log message
  logMessageElement.textContent = message;

  // Append the new paragraph element to the console log element
  consoleLogElement.appendChild(logMessageElement);
};

// // Usage example:
// console.log("Hello, world!");
// console.log("This is a console log message.");
