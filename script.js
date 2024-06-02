const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkPhoneNumber = () => {
  const userInput = document.getElementById("user-input").value;
  const validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;


   if(userInput === "") {
      alert("Please provide a phone number");
   } else if (!validPattern.test(userInput)) {
      resultsDiv.innerText = `Invalid US number: ${userInput}`;
   } else {
      resultsDiv.innerText = `Valid US number: ${userInput}`;
   }
}


const clearResults = () => {
  document.getElementById("user-input").value = "";
  resultsDiv.innerText = "";
}


checkBtn.addEventListener("click", checkPhoneNumber);
clearBtn.addEventListener("click", clearResults);