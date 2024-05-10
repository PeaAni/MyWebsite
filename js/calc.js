function divide() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  // Check for division by zero
  if (num2 === 0) {
    document.getElementById("result").innerHTML = "Error: Cannot divide by zero!";
    return;
  }

  const result = Math.floor(num1 / num2); // Use Math.floor to get whole number result
  const remain = num1 % num2;
  document.getElementById("result").innerHTML = "คำตอบ: " + result + " เศษ " + remain;
}

function compareLetters() {
  const letters = "ABCD";
  let iterations = parseInt(document.getElementById("iterationsInput").value);
  let ding = document.getElementById("ding").value;


  // Input validation (optional)
  if (iterations < 1) {
    alert("Please enter a positive number of comparisons.");
    return;
  }
  
  let matches1 = 0;
  let nonMatches1 = 0;
  let matches2 = 0;
  let nonMatches2 = 0;

  for (let i = 0; i < iterations; i++) {
    const randomIndex1 = Math.floor(Math.random() * letters.length);
    const randomLetter1 = letters[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * letters.length);
    const randomLetter2 = letters[randomIndex2];

    if (randomLetter1 === randomLetter2) {
      matches1++;
    } else {
      nonMatches1++;
    }

    if (randomLetter1 === ding) {
      matches2++;
    } else {
      nonMatches2++;
    }
  }

  const totalComparisons1 = matches1 + nonMatches1;
  const matchesPercent1 = Math.floor((matches1 / totalComparisons1) * 100);
  const nonMatchesPercent1 = 100 - matchesPercent1;

  const totalComparisons2 = matches2 + nonMatches2;
  const matchesPercent2 = Math.floor((matches2 / totalComparisons2) * 100);
  const nonMatchesPercent2 = 100 - matchesPercent2;

  document.getElementById("matches1").innerHTML = `Matches: ${matches1} (${matchesPercent1}%)`;
  document.getElementById("nonMatches1").innerHTML = `Non-Matches: ${nonMatches1} (${nonMatchesPercent1}%)`;

  document.getElementById("matches2").innerHTML = `Matches: ${matches2} (${matchesPercent2}%)`;
  document.getElementById("nonMatches2").innerHTML = `Non-Matches: ${nonMatches2} (${nonMatchesPercent2}%)`;
}

