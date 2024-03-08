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