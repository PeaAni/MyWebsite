function sortNumbers() {
    const numbersInput = document.getElementById("numbers");
    const numbersString = numbersInput.value;

    // Validate input for empty string or invalid characters
    if (numbersString === "") {
        alert("Please enter at least one number.");
        return;
    }

    if (!/^\d+(,\d+)*$/.test(numbersString)) {
        alert("ข้อมูลไม่ถูกต้อง กรุณาใส่ตัวเลขคั่นด้วยเครื่องหมายจุลภาค");
        return;
    }

    const numbersArray = numbersString.split(",").map(Number);
    numbersArray.sort((a, b) => a - b);

    const resultElement = document.getElementById("result");
    resultElement.textContent = "เลขที่เรียงแล้ว: " + numbersArray.join(", ");
}