// Get the submit button element

const submitButton = document.getElementById('submit')

// Add a click event listener to the submit button
submitButton.addEventListener('click', () => {

  //Assigned variables to the HTML elements
  const maxSupply = parseFloat(document.getElementById('maxsupply').value);
  const currentSupply = parseFloat(document.getElementById('circulatingsupply').value);
  const currentPrice = parseFloat(document.getElementById('currentprice').value);

  // Calculate current marketcap
  const currentMarketCap = calculateCurrent(currentSupply, currentPrice);

  // Calculate fully diluted marketcap
  const fullyDilutedMarketCap = calculateDiluted(maxSupply, currentPrice);

  // Display the results
  document.getElementById('result1').textContent = currentMarketCap;
  document.getElementById('result2').textContent = fullyDilutedMarketCap;

});

// Function to calculate the current marketcap
function calculateCurrent(curr, price) {

  let currentMCap;
  currentMCap = curr * price

  return currentMCap;
}

// Function to calculate the max marketcap
function calculateDiluted(max, price) {

  let dilutedMCap;
  dilutedMCap = max * price;

  return dilutedMCap;
}

